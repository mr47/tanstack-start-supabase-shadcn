// src/client.tsx
/// <reference types="vite/client" />
import { hydrateRoot } from 'react-dom/client'
import { StartClient } from '@tanstack/react-start'
import { createRouter } from './router'

const router = createRouter()

hydrateRoot(document, <StartClient router={router} />)
