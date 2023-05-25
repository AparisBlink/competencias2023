/*
*   Javascript principal con la estructura básica del estilo
*/

import ckeStyles from './cke_styles';
import overrides from './overrides';

(function (blink) {
	'use strict';

	var Competencias2023Style = function () {
		blink.theme.styles["generic2022"].apply(this, arguments);
	}

	Competencias2023Style.prototype = {
		parent: blink.theme.styles["generic2022"].prototype,
		bodyClassName: 'content_type_clase_competencias2023',
		extraPlugins: ['image2'],
		ckEditorStyles: {
			name: 'competencias2023',
			styles: ckeStyles
		},

		init: function() {
			// Heredo de otro estilo
			this.parent.init.call(this.parent, this);
			this.removeFinalSlide();
		},
		...overrides
	};

	Competencias2023Style.prototype = _.extend({}, new blink.theme.styles["generic2022"](), Competencias2023Style.prototype);

	blink.theme.styles['competencias2023'] = Competencias2023Style;
})( blink );
