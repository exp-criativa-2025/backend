import { Injectable, ConflictException } from '@nestjs/common';

export interface User {
	id: number;
	username: string;
	email: string;
	password: string; // In a real app, this should be hashed
}

@Injectable()
export class UsersService {
	private users: User[] = [];
	private nextId = 1;

	create(username: string, email: string, password: string): User {
		// Check if user with same email already exists
		const existingUser = this.users.find((user) => user.email === email);
		if (existingUser) {
			throw new ConflictException('User with this email already exists');
		}

		const newUser: User = {
			id: this.nextId++,
			username,
			email,
			password, // In a real app, this would be hashed
		};

		this.users.push(newUser);
		return newUser;
	}

	findAll(): User[] {
		return [...this.users];
	}

	findOne(id: number): User | undefined {
		return this.users.find((user) => user.id === id);
	}

	findByEmail(email: string): User | undefined {
		return this.users.find((user) => user.email === email);
	}
}
