<template>
  <div class="w-full flex flex-wrap box-border gap-6 px-4 py-6 sm:gap-8 sm:p-8 lg:gap-12 lg:p-12 xl:gap-0 xl:px-12 2xl:p-24">

    <div class="w-full xl:w-[51%] xl:mt-24">
      <!--
      <PortfolioItem title="Consh Tiny House" site="https://conshtinyhouse.com/"
      previewImageName="consh-tiny-house-preview" websiteImageName="consh-tiny-house-website" previewAlt="Consh Tiny House website"
      description="Consh design and build tiny houses in the Dordogne region of France. This website was built to showcase their builds to both French and English audiences, reflecting the handmade, craft ethos of Consh."
      :tags="['WordPress', 'Bi-lingual', 'Brand Identity', 'Logo Design']" />
      -->
      <!-- <PortfolioItem title="Tradecard" site="https://tradecard.io/"
      previewImageName="tradecard-website" websiteImageName="tradecard-website" previewAlt="Tradecard website"
      description="Tradecard is a finance tool for UK tradespeople. Currently, the website is a holding page that allows individuals to sign up for the waitlist for the tradecard app. The full website is coming soon!"
      :tags="['Nuxt', 'Brand Identity', 'Logo Design']" /> -->
      <PortfolioItem title="askporter" site="https://www.askporter.com/"
      previewImageName="askporter-preview" websiteImageName="askporter-website" previewAlt="Tradecard website"
      description="askporter is an AI assistant for real estate management."
      :tags="['Webflow', 'Brand Identity', 'CRM Integration']" />
    </div>
    <div class="w-full xl:w-[49%] xl:mt-[-10rem] 2xl:mt-[-14rem]">
      <PortfolioItem titleRight title="Les Caves GV" site="https://lescavesgv.com/"
      previewImageName="les-caves-gv-preview" websiteImageName="les-caves-gv-website" previewAlt="Les Caves GV website"
      description="This website was built for a newly established wine merchant using WordPress. As an online shop, the website needed to list 50 wines, providing a filtering system by colour and region as well as the development of a cart system. English and French versions of the site were also created."
      :tags="['WordPress', 'E-commerce', 'Bi-lingual', 'Brand Identity']" />
    </div>
    <div class="w-full xl:w-[48%] xl:mt-48">
      <PortfolioItem title="Trees of Music" site="https://treesofmusic.org/"
      previewImageName="trees-of-music-preview" websiteImageName="trees-of-music-website" previewAlt="Trees of Music website"
      description="Trees of Music is a charity set up to protect the Pernambuco tree from extinction and over-exploitation. The exceptional qualities of its wood are crucial to the production of violin bows, yet only 2,000 trees are left in the wild today."
      :tags="['WordPress', 'Brand Identity']" />
    </div>
    <div class="w-full xl:w-[52%]">
      <PortfolioItem titleRight title="Family History Finder" site="http://familyhistoryfinder.masonsquared.com/" 
      previewImageName="family-history-finder-preview" websiteImageName="family-history-finder-website" previewAlt="Consh Tiny House website"
      description="This website was built for Phil Quinn, an experienced genealogist who discovers your family history."
      :tags="['WordPress', 'Brand Identity']" />
    </div>
    <div class="w-full xl:w-[53%] xl:mt-20">
      <PortfolioItem title="Tortus" site="https://www.tortus.nl/" 
      previewImageName="tortus-finance-and-engineering-preview" websiteImageName="tortus-finance-and-engineering-website" previewAlt="Tortus website"
      description="Tortus is a recruitment firm based in the Netherlands. The website features an integrated CRM system to help manage clients and candidates."
      :tags="['Wordpress', 'Brand Identity', 'Logo Design', 'CRM Integration']" />
    </div>
    <div class="w-full xl:w-[47%] xl:mt-28">
      <PortfolioItem titleRight title="Plunder Lands" site="https://plunderlands.com/" 
      previewImageName="plunder-lands-preview" websiteImageName="plunder-lands-website" previewAlt="Consh Tiny House website"
      description="We built a launch website for Plunderlands, a collection of puzzles that together form a world filled with fantastical buildings and beasts, each as its own registered NFT." 
      :tags="['Webflow', 'Brand Identity', 'Logo Design']" />
    </div>
    <div class="w-full xl:w-[54%] xl:mt-28 mx-auto">
      <PortfolioItem title="Consh Tiny House" site="https://conshtinyhouse.com/"
      previewImageName="consh-tiny-house-preview" websiteImageName="consh-tiny-house-website" previewAlt="Consh Tiny House website"
      description="Consh design and build tiny houses in the Dordogne region of France. This website was built to showcase their builds to both French and English audiences, reflecting the handmade, craft ethos of Consh."
      :tags="['WordPress', 'Bi-lingual', 'Brand Identity', 'Logo Design']" />
    </div>
    <!--
    <div v-if="showProject" class="fixed top-0 bottom-0 left-0 right-0 bg-dkmain bg-opacity-50">
      <div class="m-10">
        <div>
          <nuxt-img fit="inside" src="/img/consh-tiny-house-website.jpg" alt="Consh Tiny House website" />
        </div>
        <div>
          
        </div>
      </div>
    </div>
    -->
  </div>
</template>

<script setup>
//const colorMode = useColorMode()

const showProject = ref(false)
const selectedProject = reactive({
  conshtinyhouse: null,
})
</script>