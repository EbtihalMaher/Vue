<template>
    <div>
        <div id="preloader">
            <div class="loader"></div>
        </div>
        <div class="login-area">
            <div class="container" style="margin-bottom: 0px">
                <div class="login-box ptb--100">
                    <form @submit.prevent="submitForm">
                        <div class="login-form-head" style="text-align: center !important">
                            <h4 class="Scrap">Website Scraper</h4>
                        </div>
                        <div class="login-form-body">
                            <div class="form-gp">
                                <label class="name">Name</label><br>
                                <input class="form-control" type="text" v-model="name" id="exampleInputname1"
                                    placeholder="Your Website name address" />
                            </div>

                            <label class="urlScrape">URL</label><br>
                            <div class="form-gp">
                                <input class="form-control" type="text" v-model="urlScrape" id="exampleInputurlScrape1"
                                    placeholder="Enter Your urlScrape" />
                            </div>
                            <div class="submit-btn-area" >
                                <button id="form_submit" type="submit" style="background-color: #17b978">
                                    Submit <i class="arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
  
  
<script>
import axios from 'axios';

export default {
    name: "Scraper",
    data() {
        return {
            name: '',
            urlScrape: ''
        };
    },
    methods: {
        submitForm() {
            const userData = {
                name: this.name,
                urlScrape: this.urlScrape
            };

            axios.post('http://localhost:8000/scraper/', userData)
                .then(response => {
                    const webId = response.data.webId; // Retrieve the webId from the response
                    console.log('Retrieved web ID:', webId);

                    // Redirect to the product page with the webId parameter
                    this.$router.push({ path: `/product/${webId}` });
                })
                .catch(error => {
                    console.log('Scraper failed with error:', error);
                });
        }








    }
}
</script>
