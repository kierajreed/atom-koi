function activate(state) {
  return atom.packages.onDidActivatePackage((pack) => {
        let path = require('path');

        if(pack.name === 'atom-koi') {
          return atom.workspace.observeTextEditors((editor) => {
            if(editor.getPath() && path.extname(editor.getPath()) === '.koi') {
              console.log('gonna use Koi grammar!')
              return editor.setGrammar(atom.grammars.grammarForScopeName('source.koi'));
            }
          });
        }
      });
    }
}

module.exports = activate;
