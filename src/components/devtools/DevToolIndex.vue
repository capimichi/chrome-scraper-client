<template>
  <div class="p-6 max-w-sm mx-auto bg-white shadow-md flex items-center space-x-4">
    <div>
      <div class="flex items-center text-xl font-medium text-black">
        <span class="h-3 w-3 mr-2 rounded-full" :class="connected ? 'bg-green-500' : 'bg-red-500'"></span>
        Connection Status
      </div>
      <p class="text-gray-500" v-if="connected">Connected</p>
      <p class="text-gray-500" v-else>Disconnected</p>
      <div class="mt-4">
        <label for="serverHost" class="block text-sm font-medium text-gray-700">Server Host</label>
        <input type="text" id="serverHost" v-model="serverHost"
               class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300">
      </div>
      <div class="mt-4">
        <button @click="connect" v-if="!connected"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Connect
        </button>
        <button @click="disconnect" v-else
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
          Disconnect
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import 'reflect-metadata';

import Container from "../../container.di.yaml"


export default {
  data() {
    return {
      connected: false,
      serverHost: '',
    }
  },
  methods: {
    async connect() {
      // Your connection logic goes here
      this.connected = true;
    },
    async disconnect() {
      // Your disconnection logic goes here
      this.connected = false;
    },
    async updateConnectionStatus() {
      var devToolController = await Container.get("DevToolController");
      this.connected = devToolController.isConnected();
    }
  },
  async mounted() {
    await this.updateConnectionStatus();
  }
}
</script>
