<template>
  <transition name="modal-fade" v-if="visible">
    <div class="modal-backdrop" role="dialog" @click.self.prevent="close">
      <div @click.self.prevent="close" class="modal__cross cross"></div>
      <div v-show="form_state" class="modal form-modal" ref="modal">
          <div class="form-modal__container">
            <div class="form-modal__legend">Что Вас интересует?</div>
              <div class="form-modal__radio-buttons">
                <div class="radio-button" @click="selectCheckbox('personal_lessons')">
                  <input type="checkbox" v-model="bid.personal_lessons" id="personal_lessons">
                  <label class="radio-label">Индивидуальные занятия</label>
                </div>
                <div class="radio-button" @click="selectCheckbox('floria')">
                  <input type="checkbox" v-model="bid.floria" id="floria">
                  <label class="radio-label">Обучение в студии “Флория”</label>
                </div>
                <div class="radio-button" @click="selectCheckbox('training')">
                  <input type="checkbox" v-model="bid.training" id="training">
                  <label class="radio-label">Подготовка к поступлению</label>
                </div>
                <div class="radio-button" @click="selectCheckbox('other')">
                  <input type="checkbox" v-model="bid.other" id="other">
                  <label class="radio-label">Другое</label>
                </div>
              </div>
            <div class="form-modal__field">
              <input class="form-modal__field-input" v-model="bid.name" type="text" placeholder="Имя">
            </div>
            <div class="form-modal__field">
              <input class="form-modal__field-input" v-model="bid.phone" type="text" placeholder="Номер телефона">
            </div>
            <div class="form-modal__field">
              <input class="form-modal__field-input" v-model="bid.email" type="text" placeholder="Эл. почта">
            </div>
            <div class="form-modal__field">
              <textarea class="form-modal__field-input form-modal__field-input_textarea" v-model="bid.comment" placeholder="Комментарий"></textarea>
            </div>
            <div class="form-modal__button-container">
              <button class="form-modal__button request-button"
                      @click.prevent="submitForm"
                      :disabled="!active_button">
                    ОТПРАВИТЬ
                </button>
            </div>
          </div>
      </div>

      <div v-show="!form_state" class="modal form-modal form-modal_thanks">
        <div class="form-modal_thanks-text">Спасибо, ваша заявка отправлена!</div>
        <div class="form-modal_thanks-text">Людмила или её помощник свяжется с вами<br />в течении дня.</div>
        <img class="form-modal_thanks-icon" src="/img/element01_bottom.svg">
      </div>
    </div>
  </transition>
</template>

<script>
import EventHub from '@/utils/event_hub'
import request from '@/utils/axios_request'

export default {
  data () {
    return {
      bid: {
        personal_lessons: true,
        floria: false,
        training: false,
        other: false,
        name: '',
        phone: '',
        email: '',
        comment: ''
      },
      visible: false,
      active_button: false,
      form_state: true
    }
  },
  mounted () {
    EventHub.$on('openFormModal', () => {
      this.show()
    })
  },
  watch: {
    'bid.name' () {
      this.updateButton()
    },
    'bid.phone' () {
      this.updateButton()
    },
    'bid.email' () {
      this.updateButton()
    },
    'bid.comment' () {
      this.updateButton()
    }
  },
  methods: {
    close () {
      this.visible = false
    },
    show () {
      this.visible = true
      this.form_state = true
    },
    selectCheckbox (name) {
      this.resetAllCheckboxes()
      this.activateCheckbox(name)
    },
    resetAllCheckboxes () {
      let checkboxesList = ['personal_lessons', 'floria', 'training', 'other']

      checkboxesList.forEach((name) => {
        this.bid[name] = false
        this.findCheckbox(name).classList.remove('checked')
      });
    },
    findCheckbox (name) {
      return document.getElementById(name)
    },
    activateCheckbox (name) {
      let checkbox = this.findCheckbox(name)
      this.bid[name] = true
      checkbox.classList.add('checked')
    },
    updateButton () {
      this.isFormValid() ? this.active_button = true : this.active_button = false
    },
    isFormValid () {
      let bid = this.bid,
          empty_fields = Object.values(bid).filter(field => field != false);
      if (empty_fields.length == 5) {
        return true
      } else {
        return false
      }
    },
    resetAllFields () {
      this.resetAllCheckboxes()
      this.activateCheckbox('personal_lessons')
      this.resetInputFields()
    },
    resetInputFields () {
      let input_fields = ['name', 'phone', 'email', 'comment']

      input_fields.forEach((name) => { this.bid[name] = '' });
    },
    changeComponentState () {
      this.form_state = false
    },
    submitForm () {
      let self = this

      request.post('bids', { bid: self.bid })
        .then((response) => {
          self.resetAllFields()
          self.changeComponentState()
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }
}
</script>
