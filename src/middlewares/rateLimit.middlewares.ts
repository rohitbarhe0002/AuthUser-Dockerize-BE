import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 3, // Max 3 requests per windowMs
  message: 'Too many requests, please try again later.',
});

export default limiter;
