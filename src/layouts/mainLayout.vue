<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<template>
    <q-layout view="hHh lpR fFf">

        <q-header elevated class="bg-primary text-white">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

                <q-toolbar-title>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                    </q-avatar>
                    Title
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" bordered>
            <div class="buttons">
                <q-btn to="/home" label="Home"></q-btn>
                <q-btn to="/home/dashboard" label="Dashboard"></q-btn>
            </div>
        </q-drawer>

        <q-page-container>
            <div class="layout-bg">
                <router-view />
            </div>
        </q-page-container>

    </q-layout>
</template>

<style scoped>
.layout-bg {
  padding: 15px;
  background: black;
  color: white;
  min-height: 100vh;
}
.buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}
</style>