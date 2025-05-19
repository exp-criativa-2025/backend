import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';

interface SignupDto {
	username: string;
	email: string;
	password: string;
}

@Controller('api')
export class UsersController {
	constructor(private readonly usersService: UsersService) { }

	@Post('signup')
	signup(@Body() signupDto: SignupDto) {
		if (!signupDto.username || !signupDto.email || !signupDto.password) {
			throw new BadRequestException(
				'Username, email and password are required',
			)
		}

		const newUser = this.usersService.create(
			signupDto.username,
			signupDto.email,
			signupDto.password,
		);

		// Don't return the password in the response
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { password, ...result } = newUser;
		return {
			message: 'User created successfully',
			user: result,
		};
	}
}
