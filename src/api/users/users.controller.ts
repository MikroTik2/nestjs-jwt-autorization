import { Body, Controller, HttpCode, HttpStatus, Patch } from '@nestjs/common'
import { ApiOperation, ApiResponse } from '@nestjs/swagger'
import type { User } from '@prisma/client'

import { Authorized, Protected } from '@/shared/decorators'

import { PatchUserRequest, UserResponse } from './dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Patch('/@me')
	@Protected()
	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: 'Update the currently authenticated user' })
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'User successfully updated',
		type: UserResponse
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description: 'Invalid update data'
	})
	@ApiResponse({
		status: HttpStatus.NOT_FOUND,
		description: 'User not found'
	})
	public async updateMe(@Authorized() user: User, @Body() dto: PatchUserRequest) {
		return this.usersService.patchUser(user.id, dto)
	}
}
