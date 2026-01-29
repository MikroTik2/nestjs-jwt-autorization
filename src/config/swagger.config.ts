import { DocumentBuilder } from '@nestjs/swagger'

export function getSwaggerConfig() {
	return new DocumentBuilder()
		.setTitle('NESTJS-JWT-AUTORIZATION API')
		.setDescription('API for NESTJS-JWT-AUTORIZATION product platform')
		.setVersion('1.0.0')
		.setLicense('AGPLv3', 'https://github.com/MikroTik2/nestjs-jwt-autorization')
		.build()
}
