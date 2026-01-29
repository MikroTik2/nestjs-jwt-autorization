import { ConfigService } from '@nestjs/config'
import { Redis } from 'ioredis'

export function getRedisConfig(configService: ConfigService): Promise<Redis> {
	return Promise.resolve(
		new Redis({
			host: configService.getOrThrow<string>('REDIS_HOST'),
			port: configService.getOrThrow<number>('REDIS_PORT'),
			username: configService.getOrThrow<string>('REDIS_USER'),
			password: configService.getOrThrow<string>('REDIS_PASSWORD'),
			db: 0
		})
	)
}
