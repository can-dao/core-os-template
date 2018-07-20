module.exports = {
  helpers: {
    escape: function(value) {
      return value.replace(/'/g, '&apos;');
    }
  },
  prompts: {
    name: {
      'type': 'string',
      'required': true,
      'message': 'Project name'
    },
    description: {
      'type': 'string',
      'required': false,
      'message': 'Project description',
      'default': 'candao project'
    },
    author: {
      'type': 'string',
      'message': 'Author',
      'default': 'jaywang@can-dao.com'
    },
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install \n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install \n  npm run dev{{/inPlace}}'
};
