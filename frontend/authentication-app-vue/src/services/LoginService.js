import swal from 'sweetalert';
import Api from './Api';

export default {
  async loginUser(user) {
    try {
      const response = await Api().post('/login', user);
      const { token } = response.data;

      localStorage.setItem('jwt', token);

      if (token) {
        swal({
          title: 'Excelente!',
          text: 'Usuário(a) logado(a) com sucesso!',
          icon: 'success',
        });
      }
    } catch (error) {
      swal({
        title: 'Oops!',
        text: 'Erro ao logar no sistema!',
        icon: 'error',
      });
      this.$router.push('/');
    }
  },
};
