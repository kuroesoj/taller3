import ReactDOM from "react-dom";
import React from "react";

import FroalaEditor from "react-froala-wysiwyg";

import "froala-editor/css/froala_style.css";

import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";

// Clase EditorTexto para usarlo como componente
class EditorTexto extends React.Component {
    render() {
        return (
            <div>
                <FroalaEditor 
                    config={{
                        toolbarButtons: [
                            'bold',
                            'italic',
                            'underline',
                            'strikeThrough',
                            'fontFamily',
                            'fontSize',
                            'alignLeft',
                            'alignCenter',
                            'alignRight',
                            'alignJustify',
                            'insertImage',
                            'insertTable',
                            'getPDF', 
                            'print'

          
          
          
          
                        ]
                    }}
                />
            </div>
        );
    }
}

// Exporta el editor como componente
export default EditorTexto;