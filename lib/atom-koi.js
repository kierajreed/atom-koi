function activate(state) {
  return atom.packages.onDidActivatePackage((pack) => {
        let path = require('path');

        if(pack.name === 'atom-koi') {
          return atom.workspace.observeTextEditors((editor) => {
            if(editor.getPath() && path.extname(editor.getPath()) === '.koi') {
              return editor.setGrammar(atom.grammars.grammarForScopeName('source.koi'));
            }
          });
        }
      });
    }
}

module.exports = activate;
