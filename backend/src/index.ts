import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

import { decode, sign, verify } from 'hono/jwt'

const app = new Hono()

app.post('/api/v1/signup', async (c) => {
  const prisma = new PrismaClient({
    //@ts-ignore
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();

  const user = await prisma.user.create({
    data: {
      email: body.email,
      passwrod: body.passwrod,
    }
  })

  const token = sign({
    id: user.id,
    //@ts-ignore
  }, c.env.JWT_SECRET);


  return c.json({
    jwt: token
  })
})

app.post('/api/v1/signin', async (c) => {

  const prisma = new PrismaClient({
    //@ts-ignore
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    }
  })

  if (!user) {
    c.status(403);
    c.json({ error: "user not found" });
  }

  //@ts-ignore
  const jwt = sign({ id: user.id }, c.env.JWT_SECRET)

  return c.json({ jwt });
})

app.post('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.put('/api/v1/signin', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/blog/:id', (c) => {
  return c.text('Hello Hono!')
})


export default app
