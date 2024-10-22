FROM node:20-alpine AS base

FROM base AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./ 
RUN npm ci

COPY . .
RUN npm run build

FROM base AS production
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_SHARP_PATH "/app/node_modules/sharp"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=deps /app/public ./public
COPY --from=deps /app/next.config.mjs ./next.config.mjs
COPY --from=deps --chown=nextjs:nodejs /app/.next/standalone ./standalone
COPY --from=deps --chown=nextjs:nodejs /app/.next/static ./.next/static

RUN mkdir .next
RUN chown -R nextjs:nodejs .next

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

USER nextjs

CMD ["node", "standalone/server.js"]
