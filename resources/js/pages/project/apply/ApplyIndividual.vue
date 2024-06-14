<template>
  <form @submit.prevent="submitIndividual" @keydown="form.onKeydown($event)">
    <div>
      <!-- Expertise Role -->
      <div class="form-group__container">
        <h4 class="form-group__input-name form__input-name">
          Expertise Role
        </h4>
        <div class="select">
          <select v-model="form.apply.expertise">
            <option value="UI/UX Designer">
              UI / UX Designer
            </option>
            <option value="Frontend Engineer">
              Frontend Engineer
            </option>
            <option value="Backend Engineer">
              Backend Engineer
            </option>
            <option value="Data Expert">
              Data Expert
            </option>
          </select>
          <span class="focus" />
        </div>
      </div>

      <!-- Tag Name -->
      <div class="form-group__container mb-5">
        <h4 class="form-group__input-name form__input-name">
          Tag Name
        </h4>
        <div class="form-tag__group">
          <input v-model="form.apply.tagname" class="form-tag__input" disabled>
          <label class="form-tag"><span class="iconify" data-icon="entypo:email" /></label>
        </div>
      </div>

      <hr class="form--hr">

      <!-- Tell me about yourself! -->
      <div class="form-group__container">
        <h4 class="form-group__input-name form__input-name">
          Tell me about yourself!
        </h4>
        <div class="form__input-name">
          <textarea v-model="form.apply.self_describe" class="form-group__input-textarea" placeholder="Max. 300 words" rows="5"></textarea>
        </div>
      </div>

      <!-- Why you? -->
      <div class="form-group__container">
        <h4 class="form-group__input-name form__input-name">
          Why are you interested in joining this project?
        </h4>
        <div class="form__input-name">
          <textarea v-model="form.apply.apply_reason" class="form-group__input-textarea" placeholder="Max. 300 words" rows="5"></textarea>
        </div>
      </div>

      <!-- Bid Amount -->
      <div class="form-group__container">
        <h4 class="form-group__input-name form__input-name">
          Bid Amount
        </h4>
        <div class="form__input-name">
          <input v-model="form.apply.bid_amount" type="number" class="form-group__input" placeholder="Enter amount">
        </div>
      </div>

      <!-- Delivery Date -->
      <div class="form-group__container">
        <h4 class="form-group__input-name form__input-name">
          Estimated Delivery Date
        </h4>
        <div class="form__input-name">
          <input v-model="form.apply.delivery_date" type="date" class="form-group__input">
        </div>
      </div>a

      <!-- Proposal Description -->
      <div class="form-group__container">
        <h4 class="form-group__input-name form__input-name">
          Proposal Description
        </h4>
        <div class="form__input-name">
          <textarea v-model="form.apply.proposal_description" class="form-group__input-textarea" placeholder="Max. 300 words" rows="5"></textarea>
        </div>
      </div>

      <!-- Milestone Payment Suggestion -->
      <div class="form-group__container">
        <h4 class="form-group__input-name form__input-name">
          Milestone Payment Suggestion
        </h4>
        <div class="form__input-name">
          <div v-for="(milestone, index) in form.apply.milestones" :key="index" class="form-group__container mb-3">
            <input v-model="milestone.name" type="text" class="form-group__input" placeholder="Milestone">
            <input v-model="milestone.price" type="number" class="form-group__input" placeholder="Price">
            <button type="button" @click="removeMilestone(index)" class="btn btn--small btn--red">Remove</button>
          </div>
          <button type="button" @click="addMilestone" class="btn btn--small btn--blue">Add Milestone</button>
        </div>
      </div>

      <!-- Submit Button -->
      <div>
        <v-button :loading="form.busy" class="btn btn--blue btn--large apply__btn-submit">
          <span v-if="form.busy">
            Submitting...
          </span>
          <span v-else>
            Submit
          </span>
          <span class="iconify" data-icon="si-glyph:paper-plane" />
        </v-button>
      </div>
    </div>
  </form>
</template>

<script>
import Form from 'vform'
import { mapGetters } from 'vuex'

export default {
  name: 'ApplyIndividualPage',

  middleware: ['auth', 'student'],

  metaInfo () { return { title: 'Apply - Individual' } },

  data() {
    return {
      form: new Form({
        apply: {
          expertise: '',
          tagname: '',
          self_describe: '',
          apply_reason: '',
          bid_amount: null,
          delivery_date: null,
          proposal_description: '',
          milestones: []
        }
      })
    };
  },

  computed: {
    ...mapGetters({
      user: 'auth/user',
      snackbar: 'notification/snackbar'
    })
  },

  mounted () {
    if (!this.$route.params.title) {
      this.$router.push({ path: `/project/${this.$route.params.id}` });
    }

    this.getUser();
  },

  methods: {
    async getUser () {
      this.form.apply = {
        expertise: this.user.expertise,
        tagname: this.user.tagname,
        self_describe: '',
        apply_reason: '',
        bid_amount: null,
        delivery_date: null,
        proposal_description: '',
        milestones: []
      };
    },

    addMilestone() {
      this.form.apply.milestones.push({ name: '', price: null });
    },

    removeMilestone(index) {
      this.form.apply.milestones.splice(index, 1);
    },

    async submitIndividual () {
      try {
        const { data } = await this.form.post('/api' + this.$route.path, this.form.apply);
        this.snackbar.open(data.message);
        this.$router.push({ path: `/project/${this.$route.params.id}` });
      } catch (e) {
        this.snackbar.open(e.response.data.message);
      }
    }
  }
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
