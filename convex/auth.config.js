export default {
  providers: [
    {
      domain: process.env.CLERK_DOMAIN_JWT_ISSUER,
      applicationID: 'convex'
    }
  ]
}
