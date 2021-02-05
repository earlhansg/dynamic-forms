export const personalData = {
  firstName: {
    label: 'Nombres',
    type: 'text',
    placeholder: 'Nombres',
    className: 'firstName',
    value: '',
    validators: {
      required: true
    }
  },
  lastName: {
    label: 'Apellidos',
    type: 'text',
    placeholder: 'Apellidos',
    className: 'lastName',
    value: '',
    validators: {
      required: true
    }
  },
  idNumber: {
    label: 'DNI',
    type: 'text',
    placeholder: 'DNI (numerico)',
    className: 'idNumber',
    value: '',
    validators: {
      required: true,
      max: 8,
      number: true
    }
  },
  address: {
    label: 'Dirección',
    type: 'text',
    placeholder: 'Dirección',
    className: 'address',
    value: '',
    validators: {
      required: true
    }
  },
  mail: {
    label: 'Correo',
    type: 'text',
    placeholder: 'Correo',
    className: 'mail',
    value: '',
    validators: {
      required: true
    }
  },
  personalDescription: {
    label: 'Descripción personal ',
    type: 'text',
    placeholder: 'Descripción personal ',
    className: 'personalDescription',
    value: '',
    validators: {
      required: true
    }
  }
};

export const educations = {
  place: {
    label: 'Lugar de educación',
    type: 'text',
    placeholder: 'Lugar de educación ',
    className: 'place',
    value: '',
    validators: {
      required: true
    }
  },
  level: {
    label: 'Nivel logrado',
    type: 'text',
    placeholder: 'Nivel logrado',
    className: 'level',
    value: '',
    validators: {
      required: true
    }
  },
  duration: {
    label: 'Tiempo',
    type: 'text',
    placeholder: 'Tiempo',
    className: 'duration',
    value: '',
    validators: {
      required: true,
      max: 8,
      number: true
    }
  }
};

export const languages = {
  language: {
    label: 'Lenguaje',
    type: 'text',
    placeholder: 'Lenguaje',
    className: 'language',
    value: '',
    validators: {
      required: true
    }
  },
  level: {
    label: 'Nivel logrado',
    type: 'text',
    placeholder: 'Nivel logrado',
    className: 'level',
    value: '',
    validators: {
      required: true
    }
  },
  duration: {
    label: 'Tiempo de experiencia en el lenguaje',
    type: 'text',
    placeholder: 'Tiempo de experiencia en el lenguaje',
    className: 'duration',
    value: '',
    validators: {
      required: true,
      max: 8,
      number: true
    }
  }
};
