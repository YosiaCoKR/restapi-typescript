export const corsOptions = {
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  accessControlAllowHeaders: ['Content-Type', 'Authorization'],
  acessContolAllowCredentials: true,
  preflightContinue: false
}
