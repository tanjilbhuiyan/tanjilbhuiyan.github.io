---
title: "How to start working with Astro & Gitlab Pages?"
publishedAt: 2023-09-23
description: "Guide for starting your journey with Astro"
slug: "work-with-astro-and-gitlab-pages"
isPublish: true
---

## What is Astro??
According to Astro documentation "Astro is an all-in-one web framework for building fast, content-focused websites."

Astro is an innovative approach to web development that challenges the conventional way of building websites. you may know astro as "static site generator", but its much more than that. Astro aims to provide the best of both worlds: the speed and efficiency of static sites and the dynamic interactivity of modern web applications.


## Key Features Astro provides:
Astro provides pretty interesting features and different approach for building websites.

- **Component Islands**: A new web architecture for building faster websites.
- **Server-first API design**: Move expensive hydration off of your users’ devices.
- **Zero JS, by default**: No JavaScript runtime overhead to slow you down.
- **Edge-ready**: Deploy anywhere, even a global edge runtime like Deno or Cloudflare.
- **Customizable**: Tailwind, MDX, and 100+ other integrations to choose from.
- **UI-agnostic**: Supports React, Preact, Svelte, Vue, Solid, Lit and more.

## So, How to start with Astro??

Astro has a nice guide for starting. You can find getting start [guide](https://docs.astro.build/en/getting-started/) here.
You can start with [NPM](https://nodejs.org/en), [PNPM](https://pnpm.io/), [Yarn](https://yarnpkg.com/) even with the latest [Bun](https://bun.sh/).

```sh
# create a new project with npm
npm create astro@latest
```
```sh
# create a new project with pnpm
pnpm create astro@latest
```
```sh
# create a new project with yarn
yarn create astro
```
```sh
# create a new project with bun
bun create astro
```

You can deploy your Astro project in Gitlab, Github, Vercel or any other place. 

Here we will show an example. Lets deploy in Gitlab. 
You can deploy Astro Project as Gitlab pages. We need to write a `.gitlab-ci.yml` file

We will also use [bun](https://bun.sh/).

```sh
# .gitlab-ci.yml

# Define the Docker image to use for the entire pipeline.
image: ubuntu:latest

# Define the stages of your pipeline.
stages:
- build
- deploy

# Define jobs for each stage.
build:
  stage: build
  script:
  - echo "Setting up system"
  - apt update && apt install {curl,unzip} -y
  - curl -fsSL https://bun.sh/install | bash
  - echo "Building your project..."
  - ~/.bun/bin/bun install
  - ~/.bun/bin/bun run build
  - cp -r dist/* public/
  artifacts:
    paths:
      - public

pages:
  stage: deploy
  script:
  - echo "Deploying your application..."
  artifacts:
    paths:
      - public

  only:
    - main

```

In short, this will create a pipeline, that will use ubuntu 22.04 image, download bun, run `bun install` , then `bun run build`. Copy the build file from `dist` to `public` folder.

In deploy stage, it will just show build files are in `public` folder. Thats it. You should have a gitlab page now.  ✨Magic ✨