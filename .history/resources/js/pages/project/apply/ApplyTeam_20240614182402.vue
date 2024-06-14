<template>
  <form @submit.prevent="submitForm" @keydown="form.onKeydown($event)">
    <div>
      <!-- Expertise Role -->
      <div class="form-group__container">
        <h4 class="form-group__input-name form__input-name">How many people are you?</h4>
        <div class="select">
          <select v-model="form.person" @change="checkMany">
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="3">3 People</option>
          </select>
          <span class="focus"></span>
        </div>
      </div>

      <!-- Individual Application -->
      <div v-if="form.person === 1">
        <div class="form-group__container">
          <h4 class="form-group__input-name form__input-name">Your Expertise</h4>
          <div class="select">
            <select v-model="form.individual.expertise">
              <option value="UI/UX Designer">UI / UX Designer</option>
              <option value="Frontend Engineer">Frontend Engineer</option>
              <option value="Backend Engineer">Backend Engineer</option>
              <option value="Data Expert">Data Expert</option>
            </select>
            <span class="focus"></span>
          </div>
        </div>

        <div class="form-group__container mb-5">
          <h4 class="form-group__input-name form__input-name">Your Tag Name</h4>
          <div class="form-tag__group">
            <input v-model="form.individual.tagname" class="form-tag__input" disabled>
            <label class="form-tag">
              <span class="iconify" data-icon="entypo:email"></span>
            </label>
          </div>
        </div>
      </div>

      <!-- Team Application -->
      <div v-else>
        <div v-for="(member, index) in form.team" :key="`TeamMember-${index}`">
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
              <span class="focus"></span>
            </div>
          </div>

          <div class="form-group__container mb-5">
            <h4 class="form-group__input-name form__input-name">
              {{ index === 0 ? 'Leader' : `Member ${index}` }} Tag Name
            </h4>
            <div class="form-tag__group">
              <input v-model="form.team[index].tagname" class="form-tag__input" disabled>
              <label class="form-tag">
                <span class="iconify" data-icon="entypo:email"></span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <hr class="form--hr">

      <!-- Tell me about yourself! -->
      <div class="form-group__container">
        <h4 class="form-group__input-name form__input-name">Tell me about your team!</h4>
        <div class="form__input-name">
          <textarea v-model="form.self_describe" class="form-group__input-textarea" placeholder="Max. 300 words" rows="5"></textarea>
        </div>
      </div>

      <!-- Why you ? -->
      <div class="form-group__container">
        <h4 class="form-group__input-name form__input-name">Why is the team interested in joining this project?</h4>
        <div>
          <textarea v-model="form.apply_reason" class="form-group__input-textarea" placeholder="Max. 300 words" rows="5"></textarea>
        </div>
      </div>

      <!-- Bid Information -->
      <div class="form-group__container">
        <h4 class="form-group__input-name form__input-name">Bid Information</h4>
        <div class="form-group__container">
          <label class="form__input-name">Proposed Price</label>
          <input v-model="form.bid_price" type="number" class="form-group__input" placeholder="Enter your proposed price" />
        </div>

        <div class="form-group__container">
          <label class="form__input-name">Proposed Delivery Date</label>
          <input v-model="form.delivery_date" type="date" class="form-group__input" />
        </div>

        <div class="form-group__container">
          <label class="form__input-name">Proposal Description</label>
          <textarea v-model="form.proposal_description" class="form-group__input-textarea" placeholder="Describe your proposal" rows="5"></textarea>
        </div>
      </div>

      <div>
        <!-- Submit Button -->
        <v-button :loading="form.busy" class="btn btn--blue btn--large apply__btn-submit">
          <span>Submit</span>
          <span class="iconify" data-icon="si-glyph:paper-plane"></span>
        </v-button>
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

  metaInfo() {
    return { title: 'Apply - Team' }
  },

  data: () => ({
    form: new Form({
      applicant: 'Team',
      person: 1,
      individual: {
        expertise: '',
        tagname: ''
      },
      team: [],
      self_describe: '',
      apply_reason: '',
      bid_price: '',
      delivery_date: '',
      proposal_description: ''
    })
  }),

  computed: {
    ...mapGetters({
      user: 'auth/user',
      members: 'auth/partyMembers',
      snackbar: 'notification/snackbar'
    })
  },

  mounted() {
    if (!this.$route.params.title) {
      this.$router.push({ path: `/project/${this.$route.params.id}` })
    }

    this.form.individual.expertise = this.user.expertise
    this.form.individual.tagname = this.user.tagname

    this.form.team.push({
      expertise: this.user.expertise,
      tagname: this.user.tagname,
      member_id: this.user.id
    })

    this.getParty()
  },

  methods: {
    checkMany() {
      this.form.team = []
      if (this.form.person > 1) {
        for (let i = 0; i < this.form.person; i++) {
          this.addMember()
        }
      } else {
        this.form.team.push({
          expertise: this.user.expertise,
          tagname: this.user.tagname,
          member_id: this.user.id
        })
      }
    },

    addMember() {
      this.form.team.push({ expertise: '', tagname: '' })
    },

    async getParty() {
      await this.$store.dispatch('auth/fetchUserParty')

      let member = this.members.map(member => {
        return {
          expertise: member.expertise,
          tagname: member.member.tagname,
          member_id: member.member_id
        }
      })

      this.form.team.push(...member)
    },

    async submitForm() {
      await this.form.post('/api' + this.$route.path)
        .then(({ data }) => {
          this.snackbar.open(data.message)
        })
        .then(() => {
          this.$router.push({ path: `/project/${this.$route.params.id}` })
        })
        .catch(e => {
          this.snackbar.open(e.response.data.message)
        })
    }
  }
}
</script>
