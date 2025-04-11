import {PassportStrategy} from '@nestjs/passport';
import {ExtractJwt, Strategy} from 'passport-jwt';
import { AuthService } from '../auth.service';
import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import { jwtConstants } from '../constants/auth-constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest:   
            ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: jwtConstants.secret,
        });
    }

    async validate(payload: JwtPayload): Promise<any> {
        const user = await this.authService.validateUser(payload);
        if (!user) {
            throw new HttpException('Invalid token', 
                HttpStatus.UNAUTHORIZED);
        }
        return user;
    }
}

export interface JwtPayload {  login: string;}