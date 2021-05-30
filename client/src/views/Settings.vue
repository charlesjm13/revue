<template>
    <div class="settings">
        <form @submit.prevent="change">
            <h1 style="color:darkgrayslate">Settings</h1>
            <br><br>
            <label><strong>Change first name: &nbsp;</strong></label><!--Allows input for last name-->
            <input v-model="firstname" placeholder="First Name"><br><br>
            <label><strong>Change last name: &nbsp;</strong></label><!--Allows input for last name-->
            <input v-model="lastname" placeholder="Last Name"><br><br>
            <label><strong>Change school: &nbsp;</strong></label><!--Allows input for school name-->
            <input v-model="userschool" placeholder="School Name"><br><br>
            <label><strong>Change email address: &nbsp;</strong></label><!--Allows input for email address-->
            <input v-model="email" placeholder="Email Address"><br><br>
            <label><strong>Reset password: &nbsp;</strong></label><!--Allows input for new password-->
            <input v-model="password" placeholder="Reset Password"><br><br>
            <label><strong>Change student type: &nbsp;</strong></label><!--Allows selection of student type-->
            <select v-model="usertype">
                <option value="" disabled selected>Student types:</option>
                <option>Prospective student</option>
                <option>Current student</option>
            </select><br><br>
            <label><strong>Change major/minor: &nbsp;</strong></label> <!--Allows input for major/minor-->
            <input v-model="usermajor" placeholder="Format: 'Major/Minor'"><br><br>
            <label><strong>Change clubs/interests: </strong></label><!--Allows input for clubs/interests-->
            <input v-model="userinterests" placeholder="Format: 'Clubs/Interests'"><br><br>
            <label><strong>Change mini-bio: &nbsp;</strong></label><br /><!--Allows input for mini bio-->
            <textarea v-model="userbio" placeholder="Mini-Bio goes here" rows="10" cols="35"></textarea><br /><br />
            <label style="float:left; padding-bottom: 25px; padding-top: 5px; padding-left: 20px;"><strong>Choose tags:</strong></label>
            <div style="padding-bottom: 5px; padding-right: 20px;">
                <select name="user-types" @change="addToTags($event)" v-model="usertags" style="float:right; padding: 5px 0px 5px 0px;">
                    <option value="" disabled selected>Pick tags that relate to your interest</option>
                    <!--<option v-for="tag in availableTags" :key="tag"></option>-->
                    <option v-for="tag in availableTags" v-bind:key="tag.value">
                        {{tag.key}}
                    </option>
                </select><br /><br />
            </div>

            <div v-if="returnVal() > 0">
                <label><strong><u>Your tags:</u></strong></label>
                <div v-for="tag in chosenTags" :key="tag">
                    <button @click="removeFromTags(tag)" style="padding: 5px 5px 5px 0px;">Remove </button>
                    <label>&nbsp; {{tag}}</label>
                </div>
            </div><br />


            <label><strong>Replace profile picture: &nbsp;</strong></label><!--Allows change in profile picture-->
            <input type="file" @change="changeImage" accept="image/*"><br />
            <img :src="photo" width="300" height="300"><br /><br />
            <!---<label><strong>Change tags:</strong></label><br />-->
            <!---<label>{{ $store.state.user.usertype }}</label>-->
            <input class="button" type="submit" value="Submit Changes">
        </form>
    </div>
</template>

<script>
    import AuthenticationService from "@/services/AuthenticationService"

    export default {
        name: 'settings',

        data() {
            return {
                firstname: '',
                lastname: '',
                userschool: '',
                email: '',
                password: '',
                usertype: '',
                usermajor: '',
                userinterests: '',
                userbio: '',
                photo: null,
                usertags: '',
                chosenTags: [],
                val: 0,
                availableTags: [{ key: "Math", value: "Math" },
                { key: "Science", value: "Science" },
                { key: "Reading", value: "Reading" },
                { key: "Art", value: "Art" },
                { key: "Business", value: "Business" },
                { key: "Music", value: "Music" },
                { key: "Philosophy", value: "Philosophy" },
                { key: "Nursing", value: "Nursing" }
                ]

            }
        },
        methods: {
            change() {
                console.log(
                    this.usermajor,
                    this.userinterests,
                    this.userbio
                )
                AuthenticationService.change({
                    usermajor: this.usermajor,
                    userinterests: this.userinterests,
                    userbio: this.userbio
                }).then(response => {
                    console.log(response.data)
                    this.$store.dispatch('setUser', response.data.user)
                })
                    .catch(e => {
                        this.error = e.response.data.error;
                    })
            },

            changeImage(e) {
                const image = e.target.files[0]
                const reader = new FileReader()
                reader.readAsDataURL(image)
                reader.onload = e => {
                    this.photo = e.target.result
                    console.log(this.photo)
                }
            },
            addToTags(event) {
                if (!this.chosenTags.includes(event)) {
                    this.chosenTags.push(event.target.value)
                    this.val = this.val + 1
                }
            },

            removeFromTags(event) {
                this.chosenTags.splice(this.chosenTags.indexOf(event), 1)
                this.val = this.val - 1
            },

            returnVal() {
                return this.val
            }
        },
        mounted() {
            this.$refs.username.focus();
        }
    }
</script>

<style>
    form {
        align-content: center;
    }
</style>


