<template>
  <div class="container">
    <footer class="py-3 my-4 border-top">
      <div class="positionCustom">
        <span class="mb-3 mb-md-0 text-black">© 2023 Company, Inc</span>
        <button class="btn btn-dark" @click="connect">Connect Wallet</button>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  methods: {
    async connect() {
      // await window.ethereum.request({ method: "eth_requestAccounts" });
      // console.log("metamask");
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
      }
    },
  },
};
</script>

<style scoped>
.positionCustom {
  display: flex;
  justify-content: space-between;
}
</style>
