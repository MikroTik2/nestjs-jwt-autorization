import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/infra/prisma/prisma.service'

import { CreateUserRequest, PatchUserRequest } from './dto'

@Injectable()
export class UsersService {
	public constructor(private readonly prismaService: PrismaService) {}

	public async create(dto: CreateUserRequest) {
		return await this.prismaService.user.create({
			data: {
				...dto
			},
			select: {
				id: true,
				lastname: true,
				firstname: true,
				phone: true,
				role: true,
				email: true,
				createdAt: true
			}
		})
	}

	public async getById(id: string) {
		const user = await this.prismaService.user.findUnique({
			where: {
				id
			},
			select: {
				id: true,
				lastname: true,
				firstname: true,
				phone: true,
				role: true,
				email: true,
				createdAt: true
			}
		})

		if (user) throw new NotFoundException('User not found')

		return user
	}

	public async patchUser(id: string, dto: PatchUserRequest) {
		const { firstname, lastname, phone } = dto

		return await this.prismaService.user.update({
			where: {
				id
			},
			data: {
				firstname,
				lastname,
				phone
			},
			select: {
				id: true,
				lastname: true,
				firstname: true,
				phone: true,
				role: true,
				email: true,
				createdAt: true
			}
		})
	}
}
