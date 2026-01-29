import { ConfigService } from '@nestjs/config'
import type { QueueOptions } from 'bullmq'

export function getBullmqConfig(configService: ConfigService): QueueOptions {
	return {
		connection: {
			maxRetriesPerRequest: 5,
			retryStrategy: times => Math.min(times * 50, 2000),
			username: configService.getOrThrow<string>('REDIS_USER'),
			password: configService.getOrThrow<string>('REDIS_PASSWORD'),
			host: configService.getOrThrow<string>('REDIS_HOST'),
			port: configService.getOrThrow<number>('REDIS_PORT')
		},
		prefix: configService.getOrThrow<string>('QUEUE_PREFIX')
	}
}
