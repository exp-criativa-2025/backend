/* eslint-disable @typescript-eslint/no-unsafe-call */
//ve o token do usuario se ta valido ou nao
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
