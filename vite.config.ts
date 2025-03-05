/*
 * @File name:
 * @Author: 1079161148@qq.com
 * @Version: V1.0
 * @Date: 2025-03-05 16:19:17
 * @Description:
 * Copyright (C) 2024-{year} Tsing Micro Technology Inc All rights reserved.
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon',
          enabledCollections: ['ep']
        })
      ],
      dts: 'src/auto-imports.d.ts'
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          enabledCollections: ['ep']
        })
      ],
      dts: 'src/components.d.ts'
    }),
    Icons({
      autoInstall: true,
      compiler: 'vue3'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    sourcemap: true
  },
  json: {
    stringify: true // 启用 JSON 字符串化
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/variables.scss" as *;
          @use "@/styles/mixins.scss" as *;
        `
      }
    },
    devSourcemap: true,
    modules: {
      localsConvention: 'camelCaseOnly'
    }
  }
})
