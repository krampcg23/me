import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.deepPurple.darken1, // #5E35B1
        secondary: colors.deepPurple.lighten4, // #D1C4E9
        accent: colors.deepPurple.accent1, // #B388FF
      },
    },
  },
});
