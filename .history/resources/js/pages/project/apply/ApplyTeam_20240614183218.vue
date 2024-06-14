<template>
  <form @submit.prevent="submitTeam" @keydown="form.onKeydown($event)">
    <div class="">
      <!-- Team Members -->
      <div v-for="(member, index) in form.team" :key="`TeamMember-${index}`">
        <!-- Expertise Role -->
        <div class="form-group__container">
          <h4 class="form-group__input-name form__input-name">
            {{ index === 0 ? 'Leader' : `Member ${index}` }} Expertise
          </h4>
          <div class="select">
            <select v-model="form.team[index].expertise">
              <option value="UI/UX Designer">UI / UX Designer</option>
              <option value="Frontend Engineer">Frontend Engineer</option>
              <option value="Backend Engineer">Backend Engineer</option>
              <option value="Data Expert">Data Expert</option>
            </select>
            <span class="focus" />
          </div>
        </div>

        <div class="form-group__container mb-5">
          <h4 class="form-group__input-name form__input-name">
            {{ index === 0 ? 'Leader' : `Member ${index}` }} Tag Name
          </h4>
          <div class=" form-tag__group">
            <input v-model="form.team[index].tagname" class="form-tag__input" disabled>
            <label class="form-tag"><span class="iconify" data-icon="entypo:email" /></label>
          </div>
        </div>
      </div>

      <hr class="form--hr">

      <!-- Tell me about your team! -->
      <div class="form-group__container">
        <h4 class="form-group__input-name form__input-name">
          Tell me about your team!
        </h4>
        <div class=" form__input-name">
          <textarea v-model="form.self_describe" class="form-group__input-textarea" placeholder="Max. 300 words" rows="5" />
        </div>
      </div>

      <!-- Why your team is interested in joining this project? -->
      <div class="form-group__container">
        <h4 class="form-group__input-name form__input-name">
          Why is your team interested in joining this project?
        </h4>
        <div class="">
          <textarea v-model="form.apply_reason" class="form-group__input-textarea" placeholder="Max. 300 words" rows="5" />
        </div>
      </div>

      <!-- Bidding Section -->
      <div>
        <!-- Bid Amount -->
        <div class="form-group__container">
          <h4 class="form-group__input-name form__input-name">
            Bid Amount
          </h4>
          <div class="form__input-name">
            <input v-model="form.bid_amount" type="number" class="form-group__input" placeholder="Enter amount">
          </div>
        </div>

        <!-- Delivery Date -->
        <div class="form-group__container">
          <h4 class="form-group__input-name form__input-name">
            Estimated Delivery Date
          </h4>
          <div class="form__input-name">
            <input v-model="form.delivery_date" type="date" class="form-group__input">
          </div>
        </div>

        <!-- Proposal Description -->
        <div class="form-group__container">
          <h4 class="form-group__input-name form__input-name">
            Proposal Description
          </h4>
          <div class="form__input-name">
            <textarea v-model="form.proposal_description" class="form-group__input-textarea" placeholder="Max. 300 words" rows="5"></textarea>
          </div>
        </div>

        <!-- Milestone Payment Suggestion -->
        <div class="form-group__container">
          <h4 class="form-group__input-name form__input-name">
            Milestone Payment Suggestion
          </h4>
          <div class="form__input-name">
            <textarea v-model="form.milestone_payment" class="form-group__input-textarea" placeholder="Describe milestone payment suggestion"></textarea>
          </div>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="">
        <button type="submit" :disabled="form.busy" class="btn btn--blue btn--large apply__btn-submit">
          <span v-if="form.busy">
            Submitting...
          </span>
          <span v-else>
            Submit
          </span>
          <span class="iconify" data-icon="si-glyph:paper-plane" />
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import Form from 'vform'
import { mapGetters } from 'vuex'

export default {
  name: 'ApplyTeamPage',

  middleware: ['auth', 'student'],

  metaInfo () { return { title: 'Apply - Team' } },

  data: () => ({
    form: new Form({
      applicant: 'Team',
      team: [],
      self_describe: '',
      apply_reason: '',
      bid_amount: null,
      delivery_date: null,
      proposal_description: '',
      milestone_payment: ''
    })
  }),

  computed: {
    ...mapGetters({
      user: 'auth/user',
      members: 'auth/partyMembers',
      snackbar: 'notification/snackbar'
    })
  },

  mounted () {
    if (!this.$route.params.title) {
      this.$router.push({ path: `/project/${this.$route.params.id}` })
    }

    this.form.team.push({ expertise: this.user.expertise, tagname: this.user.tagname, member_id: this.user.id })

    this.getParty()
  },

  methods: {
    addMember () {
      this.form.team.push({ expertise: '', tagname: '' })
    },

    async getParty () {
      await this.$store.dispatch('auth/fetchUserParty')

      let member = this.members.map(member => {
        return { expertise: member.expertise, tagname: member.member.tagname, member_id: member.member_id }
      })

      this.form.team.push(...member)
    },

    async submitTeam () {
      const payload = {
        applicant: this.form.applicant,
        team: this.form.team,
        self_describe: this.form.self_describe,
        apply_reason: this.form.apply_reason,
        bid_amount: this.form.bid_amount,
        delivery_date: this.form.delivery_date,
        proposal_description: this.form.proposal_description,
        milestone_payment: this.form.milestone_payment
      };

      try {
        const { data } = await this.form.post('/api' + this.$route.path, payload);
        this.snackbar.open(data.message);
        this.$router.push({ path: `/project/${this.$route.params.id}` });
      } catch (e) {
        this.snackbar.open(e.response.data.message);
      }
    }
  }
}
</script>

