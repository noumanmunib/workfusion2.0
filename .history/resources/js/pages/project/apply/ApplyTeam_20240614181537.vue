<template>
  <form @submit.prevent="submitTeam" @keydown="form.onKeydown($event)">
    <div class="">
      <!-- Team Members Information -->
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
              <option value="Data Expert">Data Expert</option>a
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
        <div class="">
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

      <div class="">
        <!-- Submit Button -->
        <v-button :loading="form.busy" class="btn btn--blue btn--large apply__btn-submit">
          <span>Submit</span>
          <span class="iconify" data-icon="si-glyph:paper-plane"></span>
        </v-button>
      </div>
    </div>
  </form>
</template>
