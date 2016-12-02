// -*- mode: java; c-basic-offset: 2; -*-
// Copyright 2012 Massachusetts Institute of Technology. All rights reserved.

/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Traditional English strings.
 * @author mckinney@gmail.com (Andrew F. McKinney)
 */
'use strict';

goog.provide('Blockly.Msg.nl_be');

/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */

Blockly.Msg.nl_be.switch_language_to_dutch = {
  // Switch language to Dutch.
  category: '',
  helpUrl: '',
  init: function() {
      Blockly.Msg.DUPLICATE_BLOCK = 'Dupliceer';
      Blockly.Msg.REMOVE_COMMENT = 'Commentaar Verwijderen';
      Blockly.Msg.ADD_COMMENT = 'Commentaar toevoegen';
      Blockly.Msg.EXTERNAL_INPUTS = 'Externe ingangen';
      Blockly.Msg.INLINE_INPUTS = 'Inlijn invulveld';
      Blockly.Msg.HORIZONTAL_PARAMETERS = 'Rangschik eigenschappen horizontaal';
      Blockly.Msg.VERTICAL_PARAMETERS = 'Rangschik eigenschappen horizontaal';
      Blockly.Msg.DELETE_BLOCK = 'Verwijder blok';
      Blockly.Msg.DELETE_X_BLOCKS = 'Verwijder %1 blokken';
      Blockly.Msg.COLLAPSE_BLOCK = 'Klap blok dicht';
      Blockly.Msg.EXPAND_BLOCK = 'Blok uitbreiden';
      Blockly.Msg.DISABLE_BLOCK = 'Schakel Blok uit';
      Blockly.Msg.ENABLE_BLOCK = 'Schakel blok aan';
      Blockly.Msg.HELP = 'Hulp';
      Blockly.Msg.EXPORT_IMAGE = 'Download blokken als afbeelding';
      Blockly.Msg.COLLAPSE_ALL = 'Klap blokken dicht';
      Blockly.Msg.EXPAND_ALL = 'Blok uitbreiden';
      Blockly.Msg.ARRANGE_H = 'Rangschik blokken horizontaal';
      Blockly.Msg.ARRANGE_V = 'Organizeer Blokken Vertikaal';
      Blockly.Msg.ARRANGE_S = 'Rangschik blokken diagonaal';
      Blockly.Msg.SORT_W = 'Sorteer blokken op breedte';
      Blockly.Msg.SORT_H = 'Soorteer Blokken op Hoogte';
      Blockly.Msg.SORT_C = 'Sorteer blokken op categorie';
      Blockly.Msg.COPY_TO_BACKPACK = 'Voeg toe aan rugzak';
      Blockly.Msg.COPY_ALLBLOCKS = 'Kopieer alle blokken naar de rugzak';
      Blockly.Msg.BACKPACK_GET = 'Plak Alle Blokken van Backpack';
      Blockly.Msg.BACKPACK_EMPTY = 'Maak de Rugzak leeg';
      Blockly.Msg.BACKPACK_CONFIRM_EMPTY = 'Weet u zeker dat u de rugzak wil ledigen?';
      Blockly.Msg.BACKPACK_DOC_TITLE = 'Rugzak informatie';
          Blockly.Msg.SHOW_BACKPACK_DOCUMENTATION = 'Show Backpack documentation';
      Blockly.Msg.BACKPACK_DOCUMENTATION = 'De Rugzak is een knip/plak functie. Het laat toe om blokken te kopieren van een project of scherm  en ze in een ander scherm of project te plakken.  Om te kopieren sleep je de blokken in de rugzak. Om te plakken klik je op het Rugzak icoon en  sleep je de blokken in de werkplaats.</p><p> De inhoud van de Rugzak blijft behouden tijdens de ganse  App Inventor sessie. Als je de App Inventor dicht doet, of als je je browser herlaadt,  wordt de Rugzak leeggemaakt.</p><p>Voor meer info en een video, bekijk:</p><p><a href="http://ai2.appinventor.mit.edu/reference/other/backpack.html" target="_blank">http://ai2.appinventor.mit.edu/reference/other/backpack.html</a>';

      // Variable renaming.';
      Blockly.MSG_CHANGE_VALUE_TITLE = 'Wijzig waarde:';
      Blockly.MSG_NEW_VARIABLE = 'Nieuwe variabele...';
      Blockly.MSG_NEW_VARIABLE_TITLE = 'Nieuwe variabelenaam:';
      Blockly.MSG_RENAME_VARIABLE = 'Geef variabele een andere naam...';
      Blockly.MSG_RENAME_VARIABLE_TITLE = 'Hernoem alle "%1" variabelen naar:';

      // Toolbox.';
      Blockly.MSG_VARIABLE_CATEGORY = 'Variabelen';
      Blockly.MSG_PROCEDURE_CATEGORY = 'Procedures';

      // Warnings/Errors';
      Blockly.ERROR_BLOCK_CANNOT_BE_IN_DEFINTION = 'Dit blok kan niet in een definitie';
      Blockly.ERROR_SELECT_VALID_ITEM_FROM_DROPDOWN = 'Selecteer een geldig item uit de drop down.';
      Blockly.ERROR_DUPLICATE_EVENT_HANDLER = 'Dit een een copy van een signaalafhandelaar voor deze component.';
      Blockly.ERROR_COMPONENT_DOES_NOT_EXIST = 'Component bestaat niet';
          Blockly.ERROR_BLOCK_IS_NOT_DEFINED = 'This block is not defined. Delete this block!';

      // Colour Blocks.';
          Blockly.Msg.LANG_COLOUR_PICKER_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/colors#basic';
      Blockly.Msg.LANG_COLOUR_PICKER_TOOLTIP = 'Klik op de rechthoek om een kleur te kiezen.';
      Blockly.Msg.LANG_COLOUR_BLACK = 'zwart';
      Blockly.Msg.LANG_COLOUR_WHITE = 'Wit';
      Blockly.Msg.LANG_COLOUR_RED = 'rood';
      Blockly.Msg.LANG_COLOUR_PINK = 'roze';
      Blockly.Msg.LANG_COLOUR_ORANGE = 'oranje';
      Blockly.Msg.LANG_COLOUR_YELLOW = 'geel';
      Blockly.Msg.LANG_COLOUR_GREEN = 'groen';
      Blockly.Msg.LANG_COLOUR_CYAN = 'Lichtblauw';
      Blockly.Msg.LANG_COLOUR_BLUE = 'blauw';
      Blockly.Msg.LANG_COLOUR_MAGENTA = 'magenta';
      Blockly.Msg.LANG_COLOUR_LIGHT_GRAY = 'lichtgrijs';
      Blockly.Msg.LANG_COLOUR_DARK_GRAY = 'donkergrijs';
      Blockly.Msg.LANG_COLOUR_GRAY = 'grijs';
      Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR = 'splits kleur';
          Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/colors#split';
      Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR_TOOLTIP = 'Een lijst van vier elementen, elk op een schaal van 0 tot 255, die de rode, groene, blauwe en alfa componenten voorstellen.';
      Blockly.Msg.LANG_COLOUR_MAKE_COLOUR = 'maak kleur';
          Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/colors#make';
      Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_TOOLTIP = 'Een kleur met de gegeven rood, groen, blauw en optionele alfa componenten.';

      // Control Blocks';
      Blockly.Msg.LANG_CATEGORY_CONTROLS = 'Bediening';
          Blockly.Msg.LANG_CONTROLS_IF_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#if';
      Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_1 = 'Als een waarde waar is, voer dan enkele stappen uit.';
      Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_2 = 'Als de waarde waar is, voer dan het eerste codeblok uit.\nAnders, voer het tweede codeblok uit.';
      Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_3 = 'Als de eerste waarde waar is, voer dan het eerste codeblok uit.\nAnders, als de tweede waarde waar is, voer het tweede codeblok uit.';
      Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_4 = 'Als de eerste waarde \'waar\' is, voer dan het eerste blok met opdrachten uit.\nAnders, als de tweede waarde \'waar\' is, voer dan het tweede blok met opdrachten uit.\nAls geen van de waarden \'waar\' is, voer dan het laatste blok met opdrachten uit.';
      Blockly.Msg.LANG_CONTROLS_IF_MSG_IF = 'als';
      Blockly.Msg.LANG_CONTROLS_IF_MSG_ELSEIF = 'of als';
      Blockly.Msg.LANG_CONTROLS_IF_MSG_ELSE = 'anders';
      Blockly.Msg.LANG_CONTROLS_IF_MSG_THEN = 'dan';
      Blockly.Msg.LANG_CONTROLS_IF_IF_TITLE_IF = 'als';
      Blockly.Msg.LANG_CONTROLS_IF_IF_TOOLTIP = 'Voeg toe, verwijder of verander de volgorde van de secties\nom dit blok opnieuw te configureren.';
      Blockly.Msg.LANG_CONTROLS_IF_ELSEIF_TITLE_ELSEIF = 'anders als';
      Blockly.Msg.LANG_CONTROLS_IF_ELSEIF_TOOLTIP = 'Voeg een test toe aan het als blok.';
      Blockly.Msg.LANG_CONTROLS_IF_ELSE_TITLE_ELSE = 'anders';
      Blockly.Msg.LANG_CONTROLS_IF_ELSE_TOOLTIP = 'Voeg een finaal, vang-alles-op conditie toe aan het als blok.';

          Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#while';
      Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TITLE_REPEAT = 'herhaal';
      Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_INPUT_DO = 'doe';
      Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE = 'herhaal tot';
      Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = 'tot';
      Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = 'Zolang een waarde waar is, do dan enkele regels code.';
      Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = 'Terwijl een waarde onwaar is, doe enkele andere stappen.';
      Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_1 = 'Voert de blokken in het \'doe\'-gedeelte uit zolang de test waar is.';

          Blockly.Msg.LANG_CONTROLS_FOR_HELPURL = '';
      Blockly.Msg.LANG_CONTROLS_FOR_INPUT_WITH = 'tel met';
      Blockly.Msg.LANG_CONTROLS_FOR_INPUT_VAR = 'x';
      Blockly.Msg.LANG_CONTROLS_FOR_INPUT_FROM = 'van';
      Blockly.Msg.LANG_CONTROLS_FOR_INPUT_TO = 'tot';
      Blockly.Msg.LANG_CONTROLS_FOR_INPUT_DO = 'doe';

      Blockly.Msg.LANG_CONTROLS_FOR_TOOLTIP = 'Tel van een start- tot een eindnummer.\nZet het huidige nummer, voor iedere tel, op\nvariabele "%1", en doe erna een aantal dingen.';

          Blockly.Msg.LANG_CONTROLS_FORRANGE_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#forrange';
      Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_ITEM = 'voor elk';
      Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_VAR = 'getal';
      Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_START = 'van';
      Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_END = 'tot';
      Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_STEP = 'bij';
      Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_DO = 'doe';
      Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_TEXT = 'voor getal in een zeker bereik';
      Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_PREFIX = 'voor ';
      Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_SUFFIX = '\ binnen bereik';
      Blockly.Msg.LANG_CONTROLS_FORRANGE_TOOLTIP = 'Voert de blokken in de \'doe\' sectie uit voor elke numerieke waarde van begin tot eind, telkens verdergaand met de volgende waarde. Gebruik de gegeven naam van de variabele  om te verwijzen naar de actuele waarde.';

          Blockly.Msg.LANG_CONTROLS_FOREACH_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#foreach';
      Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_ITEM = 'voor elk';
      Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_VAR = 'item';
      Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_INLIST = 'in lijst';
      Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_DO = 'doe';
      Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_TEXT = 'voor element in lijst';
      Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_PREFIX = 'voor ';
      Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_SUFFIX = '\ in lijst';
      Blockly.Msg.LANG_CONTROLS_FOREACH_TOOLTIP = 'Voert de blokken in het \'doe\'  deel uit voor elk element van de lijst.   Gebruik de opgegeven naam van de variabele om te verwijzen naar het huidige element.';
          Blockly.Msg.LANG_CONTROLS_GET_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#get';

          Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_HELPURL = 'http://en.wikipedia.org/wiki/Control_flow';
      Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP = 'van lus';
      Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = 'breek uit';
      Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = 'ga verder met volgende iteratie';
      Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = 'Breek uit de omliggende lus.';
      Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = 'Sla de rest van deze loop over en \n begin met de volgende iteratie.';
      Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_WARNING = 'Waarschuwing:\nDit blok mag alleen\ngebruikt worden in een lus.';

          Blockly.Msg.LANG_CONTROLS_WHILE_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#while';
      Blockly.Msg.LANG_CONTROLS_WHILE_TITLE = 'herhaal tot';
      Blockly.Msg.LANG_CONTROLS_WHILE_INPUT_TEST = 'Tekst';
      Blockly.Msg.LANG_CONTROLS_WHILE_INPUT_DO = 'doe';
      Blockly.Msg.LANG_CONTROLS_WHILE_COLLAPSED_TEXT = 'herhaal tot';
      Blockly.Msg.LANG_CONTROLS_WHILE_TOOLTIP = 'Voert de blokken in het \'doe\'-gedeelte uit zolang de test waar is.';
          Blockly.Msg.LANG_CONTROLS_CHOOSE_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#choose';
      Blockly.Msg.LANG_CONTROLS_CHOOSE_TITLE = 'als';
      Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_TEST = '';
      Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_THEN_RETURN = 'dan';
      Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_ELSE_RETURN = 'anders';
      Blockly.Msg.LANG_CONTROLS_CHOOSE_COLLAPSED_TEXT = 'als';
      Blockly.Msg.LANG_CONTROLS_CHOOSE_TOOLTIP = 'Als de voorwaarde die wordt getest waar is,retourneer dan het resultaat verbonden aan het \'dan-teruggave\' veld, indien niet, geef dan het resultaat terug van het \'zoneen-teruggave\' veld, op zijn minst een van de resultaten verbonden aan beide teruggave velden wordt weergegeven.';

          Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#doreturn';
      Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_INPUT_DO = 'doe';
      Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_INPUT_RETURN = 'resultaat';
      Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_TOOLTIP = 'Voert alle blokken uit in \'doe\' en geeft een statement terug. Handig wanneer je een procedure wil uitvoeren voor een waarde terug te geven aan een variabele.';
      Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_COLLAPSED_TEXT = 'doe/resultaat';
      Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_TITLE = 'doe resultaat';

      Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_TITLE = 'evalueer maar negeer het resultaat';
          Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#evaluate';
      Blockly.Msg.LANG_CONTROLS_EVAL_BUT_COLLAPSED_TEXT = 'evalueer maar negeer';
      Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_TOOLTIP = 'Voert het aangesloten blok code uit en negeert de return waarde (indien aanwezig). Deze functie is handig wanneer je een procedure wil aanroepen die een return waarde heeft, zonder dat je die waarde zelf nodig hebt.';

          /* [lyn, 10/14/13] Removed for now. May come back some day.';
           Blockly.Msg.LANG_CONTROLS_NOTHING_TITLE = 'nothing';
           Blockly.Msg.LANG_CONTROLS_NOTHING_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#nothing';
           Blockly.Msg.LANG_CONTROLS_NOTHING_TOOLTIP = 'Returns nothing. Used to initialize variables or can be plugged into a return socket if no value needed to return. this is equivalent to null or None.';
           */

          Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#openscreen';
      Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_TITLE = 'open een ander scherm';
      Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_INPUT_SCREENNAME = 'schermNaam';
      Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_COLLAPSED_TEXT = 'open scherm';
      Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_TOOLTIP = 'Opent een nieuw scherm in een app met meerdere schermen.';

          Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#openscreenwithvalue';
      Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_TITLE = 'open ander scherm met startwaarde';
      Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_INPUT_SCREENNAME = 'schermNaam';
      Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_INPUT_STARTVALUE = 'startWaarde';
      Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_COLLAPSED_TEXT = 'open scherm met waarde';
      Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_TOOLTIP = 'Opent een nieuw scherm in een meer-schermen app en geeft de startwaarde mee aan dat scherm.';


          Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#getstartvalue';
      Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_TITLE = 'krijg startwaarde';
      Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_INPUT_SCREENNAME = 'schermNaam';
      Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_INPUT_STARTVALUE = 'startWaarde';
      Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_COLLAPSED_TEXT = 'Krijg start waarde';
      Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_TOOLTIP = 'Geeft de waarde terug die was doorgegeven bij het openen van het scherm, meestal door een ander scherm in een app met meerdere schermen. Als er geen waarde was meegegeven, wordt er een lege tekst teruggegeven.';

          Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#closescreen';
      Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_TITLE = 'sluit scherm';
      Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_COLLAPSED_TEXT = 'sluit scherm';
      Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_TOOLTIP = 'Sluit het huidige scherm';

          Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#closescreenwithvalue';
      Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_TITLE = 'sluit venster met waarde';
      Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_INPUT_RESULT = 'resultaat';
      Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_COLLAPSED_TEXT = 'sluit scherm met waarde';
      Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_TOOLTIP = 'Sluit het huidig scherm en geeft een resultaat terug aan het scherm dat deze opende.';


          Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#closeapp';
      Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_TITLE = 'toepassing sluiten';
      Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_COLLAPSED_TEXT = 'sluit toepassing';
      Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_TOOLTIP = 'Sluit al de schermen af in deze app en stopt de app.';

          Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#getplainstarttext';
      Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_TITLE = 'Verkrijg gewone starttekst';
      Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_COLLAPSED_TEXT = 'Neem platte start tekst';
      Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_TOOLTIP = 'Geeft de platte tekst terug die doorgegeven werd toen dit scherm werd gestart door een andere app. Als er geen waarde werd doorgegeven, geeft deze functie een lege tekst terug. Voor multischerm apps, gebruik dan neem start waarde in plaats van neem platte start tekst.';

          Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/control#closescreenwithplaintext';
      Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_TITLE = 'Sluit het venster met gewone tekst';
      Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_INPUT_TEXT = 'tekst';
      Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_COLLAPSED_TEXT = 'sluit scherm met platte tekst';
      Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_TOOLTIP = 'Sluit het huidige scherm af en geeft de tekst terug aan de app die dit scherm geopend heeft.   Deze functie is bedoeld om tekst te retourneren aan activiteiten die niet gerelateerd zijn aan App Inventor en niet om naar App Inventor schermen terug te keren. Voor App Inventor apps met meerdere schermen, gebruik de functie Sluit Scherm met Waarde, niet Sluit Scherm met Gewone Tekst.';

      // Logic Blocks.';
      Blockly.Msg.LANG_CATEGORY_LOGIC = 'Logica';
          Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL = 'http://en.wikipedia.org/wiki/Inequality_(mathematics)';
          Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL_EQ = 'http://appinventor.mit.edu/explore/ai2/support/blocks/logic#=';
          Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL_NEQ = 'http://appinventor.mit.edu/explore/ai2/support/blocks/logic#not=';
      Blockly.Msg.LANG_LOGIC_COMPARE_TOOLTIP_EQ = 'Test of twee dingen gelijk zijn. \nDe dingen die worden vergeleken kunnen vanalles zijn, niet enkel getallen. \nGetallen worden als gelijk beschouwd aan hun tekstvorm, \nbijvoorbeeld, het getal 0 is gelijk aan de tekst "0".  Ook two tekstvelden \ndie getallen voorstellen zijn gelijk aan elkaar als de getallen gelijk zijn aan mekaar. \n"1" is gelijk aan "01".';

      Blockly.Msg.LANG_LOGIC_COMPARE_TOOLTIP_NEQ = 'Geef waar terug als beide inputs niet gelijk zijn aan elkaar.';
      Blockly.Msg.LANG_LOGIC_COMPARE_TRANSLATED_NAME = 'logische is gelijk';
      Blockly.Msg.LANG_LOGIC_COMPARE_EQ = '=';
      Blockly.Msg.LANG_LOGIC_COMPARE_NEQ = '\u2260';

          Blockly.Msg.LANG_LOGIC_OPERATION_HELPURL_AND = 'http://appinventor.mit.edu/explore/ai2/support/blocks/logic#and';
          Blockly.Msg.LANG_LOGIC_OPERATION_HELPURL_OR = 'http://appinventor.mit.edu/explore/ai2/support/blocks/logic#or';
      Blockly.Msg.LANG_LOGIC_OPERATION_AND = 'en';
      Blockly.Msg.LANG_LOGIC_OPERATION_OR = 'of';
      Blockly.Msg.LANG_LOGIC_OPERATION_TOOLTIP_AND = 'Geef Waar terug als alle invoer Waar is.';
      Blockly.Msg.LANG_LOGIC_OPERATION_TOOLTIP_OR = 'Geef waar terug als de invoer waar is.';

          Blockly.Msg.LANG_LOGIC_NEGATE_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/logic#not';
      Blockly.Msg.LANG_LOGIC_NEGATE_INPUT_NOT = 'niet';
      Blockly.Msg.LANG_LOGIC_NEGATE_TOOLTIP = 'Geeft waar terug wanneer de input niet waar is.\nGeeft niet waar terug waneer de input waar is.';

          Blockly.Msg.LANG_LOGIC_BOOLEAN_TRUE_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/logic#true';
          Blockly.Msg.LANG_LOGIC_BOOLEAN_FALSE_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/logic#false';
      Blockly.Msg.LANG_LOGIC_BOOLEAN_TRUE = 'waar';
      Blockly.Msg.LANG_LOGIC_BOOLEAN_FALSE = 'onwaar';
      Blockly.Msg.LANG_LOGIC_BOOLEAN_TOOLTIP_TRUE = 'Geeft de booleaanse waar terug.';
      Blockly.Msg.LANG_LOGIC_BOOLEAN_TOOLTIP_FALSE = 'Geeft booleaanse niet waar terug.';

      // Math Blocks.';
      Blockly.Msg.LANG_CATEGORY_MATH = 'Wiskunde';
          Blockly.Msg.LANG_MATH_NUMBER_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#number';
      Blockly.Msg.LANG_MATH_NUMBER_TOOLTIP = 'Rapporteer het getoonde getal.';
      Blockly.Msg.LANG_MATH_MUTATOR_ITEM_INPUT_NUMBER = 'getal';

          Blockly.Msg.LANG_MATH_COMPARE_HELPURL = '';
          Blockly.Msg.LANG_MATH_COMPARE_HELPURL_EQ = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#=';
          Blockly.Msg.LANG_MATH_COMPARE_HELPURL_NEQ = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#not=';
          Blockly.Msg.LANG_MATH_COMPARE_HELPURL_LT = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#lt';
          Blockly.Msg.LANG_MATH_COMPARE_HELPURL_LTE = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#lte';
          Blockly.Msg.LANG_MATH_COMPARE_HELPURL_GT = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#gt';
          Blockly.Msg.LANG_MATH_COMPARE_HELPURL_GTE = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#gte';
      Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_EQ = 'Geef Waar terug als beide getallen gelijk zijn aan elkaar.';
      Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_NEQ = 'Geef Waar terug als beide getallen niet gelijk zijn aan elkaar.';
      Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_LT = 'Geeft Waar terug als het eerste nummer\nkleiner is dan het tweede nummer.';
      Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_LTE = 'Geeft waar terug als het eerste getal kleiner is\nof gelijk aan het tweede getal.';
      Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_GT = 'Geeft waar terug als het eerste getal groter is\ndan het tweede getal.';
      Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_GTE = 'Geef waar terug als het eerste getal groter is\ndan of gelijk aan het tweede getal.';
      Blockly.Msg.LANG_MATH_COMPARE_EQ = '=';
      Blockly.Msg.LANG_MATH_COMPARE_NEQ = '\u2260';
      Blockly.Msg.LANG_MATH_COMPARE_LT = '<';
      Blockly.Msg.LANG_MATH_COMPARE_LTE = '\u2264';
      Blockly.Msg.LANG_MATH_COMPARE_GT = '>';
      Blockly.Msg.LANG_MATH_COMPARE_GTE = '\u2265';

          Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_ADD = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#add';
          Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_MINUS = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#subtract';
          Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_MULTIPLY = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#multiply';
          Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_DIVIDE = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#divide';
          Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_POWER = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#exponent';
      Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_ADD = 'Geeft de som van twee getallen terug.';
      Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_MINUS = 'Geeft het verschil tussen twee getallen terug.';
      Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_MULTIPLY = 'Geeft het product van twee getallen terug.';
      Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_DIVIDE = 'Geeft het quoti\u00EBnt van twee getallen.';
      Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_POWER = 'Geeft het eerste getal verheven tot\nde macht van het tweede getal.';
      Blockly.Msg.LANG_MATH_ARITHMETIC_ADD = '+';
      Blockly.Msg.LANG_MATH_ARITHMETIC_MINUS = '-';
      Blockly.Msg.LANG_MATH_ARITHMETIC_MULTIPLY = '*';
      Blockly.Msg.LANG_MATH_ARITHMETIC_DIVIDE = '/';
      Blockly.Msg.LANG_MATH_ARITHMETIC_POWER = '^';

          Blockly.Msg.LANG_MATH_CHANGE_TITLE_CHANGE = 'change';
           Blockly.Msg.LANG_MATH_CHANGE_TITLE_ITEM = 'item';
           Blockly.Msg.LANG_MATH_CHANGE_INPUT_BY = 'by';
           Blockly.Msg.LANG_MATH_CHANGE_TOOLTIP = 'Add a number to variable "%1".';


      Blockly.Msg.LANG_MATH_SINGLE_OP_ROOT = 'vierkantswortel';
      Blockly.Msg.LANG_MATH_SINGLE_OP_ABSOLUTE = 'absoluut';
      Blockly.Msg.LANG_MATH_SINGLE_OP_NEG = 'negatief';
      Blockly.Msg.LANG_MATH_SINGLE_OP_LN = 'log';
      Blockly.Msg.LANG_MATH_SINGLE_OP_EXP = 'e^';
      Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_ROOT = 'Geeft de vierkantswortel van een getal.';
          Blockly.Msg.LANG_MATH_SINGLE_HELPURL_ROOT = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#sqrt';
      Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_ABS = 'Geef de absolute waarde van een getal terug.';
          Blockly.Msg.LANG_MATH_SINGLE_HELPURL_ABS = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#abs';
      Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_NEG = 'Geeft het negatief van een getal.';
          Blockly.Msg.LANG_MATH_SINGLE_HELPURL_NEG = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#neg';
      Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_LN = 'Teruggave van het natuurlijke logaritme van een getal, d.w.z. het logaritme met het grondtal e (2,71828 ...)';
          Blockly.Msg.LANG_MATH_SINGLE_HELPURL_LN ='http://appinventor.mit.edu/explore/ai2/support/blocks/math#log';
      Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_EXP = 'Geef e (2.71828...) tot de macht terug';
          Blockly.Msg.LANG_MATH_SINGLE_HELPURL_EXP ='http://appinventor.mit.edu/explore/ai2/support/blocks/math#e';
      /* Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_POW10 = 'Return 10 to the power of a number.';*/

      Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_ROUND = 'Rond een nummer af naar boven of beneden.';
          Blockly.Msg.LANG_MATH_ROUND_HELPURL_ROUND = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#round';
      Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_CEILING = 'Rond de input af tot het kleinste\ngetal dat niet kleiner is dan de input';
          Blockly.Msg.LANG_MATH_ROUND_HELPURL_CEILING = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#ceiling';
      Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_FLOOR = 'Rond de input af tot het grootste\ngetal dat niet groter is dan de input';
          Blockly.Msg.LANG_MATH_ROUND_HELPURL_FLOOR = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#floor';
      Blockly.Msg.LANG_MATH_ROUND_OPERATOR_ROUND = 'rond af';
      Blockly.Msg.LANG_MATH_ROUND_OPERATOR_CEILING = 'afrondenNaarBoven';
      Blockly.Msg.LANG_MATH_ROUND_OPERATOR_FLOOR = 'naar beneden afgerond';

      Blockly.Msg.LANG_MATH_TRIG_SIN = 'sin';
      Blockly.Msg.LANG_MATH_TRIG_COS = 'cos';
      Blockly.Msg.LANG_MATH_TRIG_TAN = 'tan';
      Blockly.Msg.LANG_MATH_TRIG_ASIN = 'asin';
      Blockly.Msg.LANG_MATH_TRIG_ACOS = 'acos';
      Blockly.Msg.LANG_MATH_TRIG_ATAN = 'atan';
      Blockly.Msg.LANG_MATH_TRIG_ATAN2 = 'atan2';
      Blockly.Msg.LANG_MATH_TRIG_ATAN2_X = 'x';
      Blockly.Msg.LANG_MATH_TRIG_ATAN2_Y = 'j';
      Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_SIN = 'Geeft de sinus van de gegeven hoek (in graden).';
          Blockly.Msg.LANG_MATH_TRIG_HELPURL_SIN = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#sin';
      Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_COS = 'Geeft de cosinus van een gegeven hoek in graden.';
          Blockly.Msg.LANG_MATH_TRIG_HELPURL_COS = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#cos';
      Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_TAN = 'Geeft de tangens van de gegeven hoek in graden.';
          Blockly.Msg.LANG_MATH_TRIG_HELPURL_TAN = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#tan';
      Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ASIN = 'Geeft een hoek tussen (-90,+90]\ngraden met de gegeven sinus waarde.';
          Blockly.Msg.LANG_MATH_TRIG_HELPURL_ASIN = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#asin';
      Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ACOS = 'Geeft een hoek tussen [0, 180)\ngraden met de gegeven cosinus waarde.';
          Blockly.Msg.LANG_MATH_TRIG_HELPURL_ACOS = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#acos';
      Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ATAN = 'Geeft een hoek tussen (-90, +90)\ngraden met de gegeven tangens.';
      Blockly.Msg.LANG_MATH_TRIG_HELPURL_ATAN = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#atan';
      Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ATAN2 = 'Geeft een hoek in tussen (-180, +180]\ngraden met de gegeven rechthoekcoordinaten.';
          Blockly.Msg.LANG_MATH_TRIG_HELPURL_ATAN2 = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#atan2';

      Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_MIN = 'min';
      Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_MAX = 'max';
      Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_MIN = 'Geeft het kleinste van zijn argumenten terug..';
      Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_MAX = 'Geeft het grootste van zijn argumenten terug..';

      Blockly.Msg.LANG_MATH_DIVIDE = '\u00F7';
      Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_MODULO = 'rest van';
      Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_REMAINDER = 'de rest van';
      Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_QUOTIENT = 'quoti\u00EBnt van';
      Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_MODULO = 'Geeft de gehele deling terug.';
          Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_MODULO = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#modulo';
      Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_REMAINDER = 'Geef de rest terug.';
          Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_REMAINDER = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#remainder';
      Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_QUOTIENT = 'Berekent het quotient.';
          Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_QUOTIENT = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#quotient';

          Blockly.Msg.LANG_MATH_RANDOM_INT_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#randomint';
      Blockly.Msg.LANG_MATH_RANDOM_INT_TITLE_RANDOM = 'willekeurig getal';
      Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT_FROM = 'van';
      Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT_TO = 'tot';
      Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT = 'willekeurig getal tussen %1 en %2';
      Blockly.Msg.LANG_MATH_RANDOM_INT_TOOLTIP = 'Geeft een willekeurige geheel getal tussen de boven en de\nondergrens. De grenzen worden afgerond tot getallen kleiner\ndan 2**30.';

          Blockly.Msg.LANG_MATH_RANDOM_FLOAT_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#randomfrac';
      Blockly.Msg.LANG_MATH_RANDOM_FLOAT_TITLE_RANDOM = 'willekeurig deel';
      Blockly.Msg.LANG_MATH_RANDOM_FLOAT_TOOLTIP = 'Geef een willekeurig getal tussen 0 en 1 terug.';

          Blockly.Msg.LANG_MATH_RANDOM_SEED_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#randomseed';
      Blockly.Msg.LANG_MATH_RANDOM_SEED_TITLE_RANDOM = 'stel willekeurige seed in';
      Blockly.Msg.LANG_MATH_RANDOM_SEED_INPUT_TO = 'tot';
      Blockly.Msg.LANG_MATH_RANDOM_SEED_TOOLTIP = 'specificeert een numerieke seed waarde\nvoor de willekeurige nummer maker';

      Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TITLE_CONVERT = 'zet om';
      Blockly.Msg.LANG_MATH_CONVERT_ANGLES_OP_RAD_TO_DEG = 'radialen naar graden';
      Blockly.Msg.LANG_MATH_CONVERT_ANGLES_OP_DEG_TO_RAD = 'graden naar radialen';
      Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TOOLTIP_RAD_TO_DEG = 'Geeft de graden terug tussen\n(0,360) die overeenkomt met het argument in radialen.';
          Blockly.Msg.LANG_MATH_CONVERT_ANGLES_HELPURL_RAD_TO_DEG = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#convertrad';
      Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TOOLTIP_DEG_TO_RAD = 'Geeft de waarde in radialen terug volgens een schaal van\n[-\u03C0, +\u03C0) overeenkomstig met de graden.';
          Blockly.Msg.LANG_MATH_CONVERT_ANGLES_HELPURL_DEG_TO_RAD = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#convertdeg';

          Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#format';
      Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_TITLE = 'maak op als decimaal';
      Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT_NUM = 'getal';
      Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT_PLACES = 'plaatsen';
      Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT = 'Formatteer als decimaal getal  %1 plaatsen %2';
      Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_TOOLTIP = 'Geeft het nummer terug in decimale notatie\nmet een bepaald aantal getallen achter de komma.';

          Blockly.Msg.LANG_MATH_IS_A_NUMBER_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#isnumber';
      Blockly.Msg.LANG_MATH_IS_A_NUMBER_INPUT_NUM = 'is een getal?';
      Blockly.Msg.LANG_MATH_IS_A_NUMBER_TOOLTIP = 'Test of iets een getal is.';

          Blockly.Msg.LANG_MATH_IS_A_DECIMAL_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#isnumber';
      Blockly.Msg.LANG_MATH_IS_A_DECIMAL_INPUT_NUM = 'is decimaal?';
      Blockly.Msg.LANG_MATH_IS_A_DECIMAL_TOOLTIP = 'Test of iets een string is die een positief integraal grondgetal 10 voorstelt.';

          Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#isnumber';
      Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_INPUT_NUM = 'is hexadecimaal?';
      Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_TOOLTIP = 'Tests of iets een tekst is die een hexadecimaal getal voorstelt.';

          Blockly.Msg.LANG_MATH_IS_A_BINARY_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/math#isnumber';
      Blockly.Msg.LANG_MATH_IS_A_BINARY_INPUT_NUM = 'is binair?';
      Blockly.Msg.LANG_MATH_IS_A_BINARY_TOOLTIP = 'Test of iets een tekst is die een binair getal voorstelt.';


      Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TITLE_CONVERT = 'zet getal om';
      Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_DEC_TO_HEX = 'decimaal naar hexadecimaal';
          Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_DEC_TO_HEX = '';
      Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_DEC_TO_HEX = 'Neemt een positief decimaal getal en geeft een tekst terug die dat getal voorstelt in hexadecimale notatie.';

      Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_HEX_TO_DEC = 'hex naar dec';
          Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_HEX_TO_DEC = '';
      Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_HEX_TO_DEC = 'Neemt een tekst die een hexadecimaal getal voorstelt en geeft een tekst terug die dat nummer voorstelt als decimaal getal.';

      Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_DEC_TO_BIN = 'decimaal naar binair';
          Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_DEC_TO_BIN = '';
      Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_DEC_TO_BIN = 'Neemt een positief geheel decimaal getal en geeft de tekst weer die dat getal voorstelt in binair';

      Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_BIN_TO_DEC = 'binair naar decimaal';
          Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_BIN_TO_DEC = '';
      Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_BIN_TO_DEC = 'Neemt een tekst die een binair getal voorstelt en geeft de tekst terug die dat getal decimaal voorstelt';

      // Text Blocks.';
      Blockly.Msg.LANG_CATEGORY_TEXT = 'Tekst';
          Blockly.Msg.LANG_TEXT_TEXT_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#string';
      Blockly.Msg.LANG_TEXT_TEXT_TOOLTIP = 'Een tekst.';
      Blockly.Msg.LANG_TEXT_TEXT_LEFT_QUOTE = '\u201C';
      Blockly.Msg.LANG_TEXT_TEXT_RIGHT_QUOTE = '\u201D';

          Blockly.Msg.LANG_TEXT_JOIN_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#join';
      Blockly.Msg.LANG_TEXT_JOIN_TITLE_CREATEWITH = 'maak tekst met';
      Blockly.Msg.LANG_TEXT_JOIN_TOOLTIP = 'Voegt alle inputs samen tot 1 enkele tekst.\nAls er geen inputs zijn, wordt een lege tekst gemaakt.';

      Blockly.Msg.LANG_TEXT_JOIN_TITLE_JOIN = 'samenvoegen';

      Blockly.Msg.LANG_TEXT_JOIN_ITEM_TITLE_ITEM = 'tekst';
      Blockly.Msg.LANG_TEXT_JOIN_ITEM_TOOLTIP = '';

          Blockly.Msg.LANG_TEXT_APPEND_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
      Blockly.Msg.LANG_TEXT_APPEND_TO = 'naar';
      Blockly.Msg.LANG_TEXT_APPEND_APPENDTEXT = 'voeg tekst toe';
      Blockly.Msg.LANG_TEXT_APPEND_VARIABLE = 'item';
      Blockly.Msg.LANG_TEXT_APPEND_TOOLTIP = 'Voeg wat tekst toe aan variabele "%1".';

          Blockly.Msg.LANG_TEXT_LENGTH_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#length';
      Blockly.Msg.LANG_TEXT_LENGTH_INPUT_LENGTH = 'lengte';
      Blockly.Msg.LANG_TEXT_LENGTH_TOOLTIP = 'Geeft het aantal letters (inclusief spaties)\nterug in de meegegeven tekst.';

          Blockly.Msg.LANG_TEXT_ISEMPTY_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#isempty';
      Blockly.Msg.LANG_TEXT_ISEMPTY_INPUT_ISEMPTY = 'is leeg';
      Blockly.Msg.LANG_TEXT_ISEMPTY_TOOLTIP = 'Geeft waar terug als de lengte van de\ntekst gelijk is aan 0, anders wordt niet waar teruggegeven.';

      Blockly.Msg.LANG_TEXT_COMPARE_LT = '\ <';
      Blockly.Msg.LANG_TEXT_COMPARE_EQUAL = '\ =';
      Blockly.Msg.LANG_TEXT_COMPARE_GT = '\ >';
          Blockly.Msg.LANG_TEXT_COMPARE_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#compare';
      Blockly.Msg.LANG_TEXT_COMPARE_INPUT_COMPARE = 'vergelijk teksten';
      Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_LT = 'Controleert of tekst1 lexicografisch kleiner is dan text2. \\ NAls een stuk tekst het voorvoegsel is van de andere, dan wordt de kortere tekst \\ nals kleiner beschouwd. Kleine letters worden voorafgegaan door hoofdletters.';


      Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_EQUAL = 'Test of stukken tekst identiek zijn, of ze dezelfde karakters hebben\n in dezelfde volgorde. Dit verschilt van de normale=\nin het geval waarin de stukken tekst getallen zijn: 123 en 0123 zijn=\nmaar niet tekst =.';
      Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_GT = 'Geeft aan of tekst1 lexicologisch groter is dan tekst2.\nAls een tekst het eerste deel is van de andere, dan wordt de kortere tekst aanzien als kleiner.\nHoofdletters hebben voorrang op kleine letters.';
          Blockly.Msg.LANG_TEXT_TEXT_OBFUSCATE_TOOLTIP = 'Produces text, like a text block.  The difference is that the \n"';
          Blockly.Msg.LANG_TEXT_TEXT_OBFUSCATE = 'Obfuscated Text';
          Blockly.Msg.LANG_TEXT_TEXT_OBFUSCATE_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#obfuscatetext';

           Blockly.Msg.LANG_TEXT_ENDSTRING_INPUT = 'letters in text';
           Blockly.Msg.LANG_TEXT_ENDSTRING_TOOLTIP = 'Returns specified number of letters at the beginning or end of the text.';
           Blockly.Msg.LANG_TEXT_ENDSTRING_OPERATOR_FIRST = 'first';
           Blockly.Msg.LANG_TEXT_ENDSTRING_OPERATOR_LAST = 'last';

           Blockly.Msg.LANG_TEXT_INDEXOF_TITLE_FIND = 'find';
           Blockly.Msg.LANG_TEXT_INDEXOF_INPUT_OCCURRENCE = 'occurrence of text';
           Blockly.Msg.LANG_TEXT_INDEXOF_INPUT_INTEXT = 'in text';
           Blockly.Msg.LANG_TEXT_INDEXOF_TOOLTIP = 'Returns the index of the first/last occurrence\n';

           Blockly.Msg.LANG_TEXT_INDEXOF_OPERATOR_FIRST = 'first';
           Blockly.Msg.LANG_TEXT_INDEXOF_OPERATOR_LAST = 'last';

          /*Blockly.Msg.LANG_TEXT_CHARAT_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';/*
           Blockly.Msg.LANG_TEXT_CHARAT_INPUT_AT = 'letter at';
           Blockly.Msg.LANG_TEXT_CHARAT_INPUT_INTEXT = 'in text';
           Blockly.Msg.LANG_TEXT_CHARAT_TOOLTIP = 'Returns the letter at the specified position.';*/

      Blockly.Msg.LANG_TEXT_CHANGECASE_OPERATOR_UPPERCASE = 'hoofdletters';
      Blockly.Msg.LANG_TEXT_CHANGECASE_OPERATOR_DOWNCASE = 'naar kleine letters';
      Blockly.Msg.LANG_TEXT_CHANGECASE_TOOLTIP_UPPERCASE = 'Geeft een kopie van de meegegeven tekst omgezet in hoofdletters.';
          Blockly.Msg.LANG_TEXT_CHANGECASE_HELPURL_UPPERCASE = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#upcase';
      Blockly.Msg.LANG_TEXT_CHANGECASE_TOOLTIP_DOWNCASE = 'Geeft een kopie terug van de tekst in kleine letters.';
          Blockly.Msg.LANG_TEXT_CHANGECASE_HELPURL_DOWNCASE = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#downcase';

          Blockly.Msg.LANG_TEXT_TRIM_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#trim';
      Blockly.Msg.LANG_TEXT_TRIM_TITLE_TRIM = 'trim';
      Blockly.Msg.LANG_TEXT_TRIM_TOOLTIP = 'Geeft een kopie terug van de tekst argumenten met elke\nspatie vooraan en achteraan verwijderd.';


          Blockly.Msg.LANG_TEXT_STARTS_AT_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#startsat';
      Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_STARTS_AT = 'begint bij';
      Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_TEXT = 'tekst';
      Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_PIECE = 'stukje';
      Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT = 'start op  tekst %1 stuk %2';
      Blockly.Msg.LANG_TEXT_STARTS_AT_TOOLTIP = 'Geeft de beginpositie terug van het stukje in de tekst\nwaar index 1 het begin van de tekst aangeeft. Geeft 0 terug wanneer\nhet stuk tekst niet voorkomt.';

          Blockly.Msg.LANG_TEXT_CONTAINS_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#contains';
      Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_CONTAINS = 'bevat';
      Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_TEXT = 'tekst';
      Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_PIECE = 'stukje';
      Blockly.Msg.LANG_TEXT_CONTAINS_INPUT = 'bevat  tekst %1 stuk %2';
      Blockly.Msg.LANG_TEXT_CONTAINS_TOOLTIP = 'Test of het stukje voorkomt in de tekst.';

          Blockly.Msg.LANG_TEXT_SPLIT_HELPURL = '';
      Blockly.Msg.LANG_TEXT_SPLIT_INPUT_TEXT = 'tekst';
      Blockly.Msg.LANG_TEXT_SPLIT_INPUT_AT = 'op';
      Blockly.Msg.LANG_TEXT_SPLIT_INPUT_AT_LIST = 'op (lijst)';
      Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_FIRST = 'splits aan de eerste';
      Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_FIRST_OF_ANY = 'splits bij de eerste van';
      Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT = 'splits';
      Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_ANY = 'splits bij elk';
      Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_FIRST = 'Verdeelt de opgegeven tekst in twee delen en gebruikt hiervoor de plaats het eerste voorkomen \nvan de tekst \'aan\' als splitser, en geeft een lijst met twee elementen terug. Deze lijst bestaat \nuit het deel voor de splitser en het deel achter de splitser. \nHet splitsen van "appel,banaan,kers,hondeneten" met als een komma als splitser geeft een lijst \nterug met twee elementen: het eerste is de tekst "appel" en het tweede is de tekst \n"banaan,kers,hondeneten". \nMerk op de de komma achter "appel" niet in het resultaat voorkomt, omdat dit de splitser is.';

          Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_FIRST = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#splitat';
      Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_FIRST_OF_ANY = 'Splitst een gegeven tekst in een lijst met twee elementen. De eerste plaats van eender welk item in de lijst "aan" is het "splitsingspunt". \n\nBijvoorbeeld als je  "Ik hou van appels, bananen en ananas" splitst volgens de lijst "(ba,ap)", dan geeft dit \neen lijst van 2 elementen terug. Het eerste item is "Ik hou van" en het tweede item is \n"pels, bananen en ananas."';

          Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_FIRST_OF_ANY = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#splitatfirstofany';
      Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT = 'Verdeelt tekst in stukken met de tekst "op" als splitspunt en levert een lijst van de resultaten.  \n"\u00E9\u00E9n,twee,drie,vier" splitsen op "," (komma) geeft de lijst "(\u00E9\u00E9n twee drie vier)" terug. \n"\u00E9\u00E9n-aardappel,twee-aardappel,drie-aardappel,vier" splitsen op "-aardappel," geeft ook de lijst "(\u00E9\u00E9n twee drie vier)" terug.';


          Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#split';
      Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_ANY = 'Verdeeld de gegeven tekst in een lijst, waarbij elk element in de lijst "op" als het\nverdeelpunt, en geeft een lijst terug van het resultaat. \nSplitsen van "sinaasappel,banaan,appel,hondenvoer" met als "op" een lijst van 2 elementen met als eerste \nelement een komma en als tweede element "pel" geeft een lijst van 4 elementen: \n"(sinaasap banaan ap hondenvoer)".';

          Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_ANY = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#splitatany';

          /*.LANG_TEXT_PRINT_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
           Blockly.Msg.LANG_TEXT_PRINT_TITLE_PRINT = 'print';
           Blockly.Msg.LANG_TEXT_PRINT_TOOLTIP = 'Print the specified text, number or other value.'; */

          /*Blockly.Msg.LANG_TEXT_PROMPT_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode92.html';/*
           Blockly.Msg.LANG_TEXT_PROMPT_TITLE_PROMPT_FOR = 'prompt for';
           Blockly.Msg.LANG_TEXT_PROMPT_TITILE_WITH_MESSAGE = 'with message';
           Blockly.Msg.LANG_TEXT_PROMPT_TOOLTIP = 'Prompt for user input with the specified text.';
           Blockly.Msg.LANG_TEXT_PROMPT_TYPE_TEXT = 'text';
           Blockly.Msg.LANG_TEXT_PROMPT_TYPE_NUMBER = 'number';*/

          Blockly.Msg.LANG_TEXT_SPLIT_AT_SPACES_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#splitspaces';
      Blockly.Msg.LANG_TEXT_SPLIT_AT_SPACES_TITLE = 'splits bij spaties';
      Blockly.Msg.LANG_TEXT_SPLIT_AT_TOOLTIP = 'Splitst de tekst in stukjes bij elke spatie.';

          Blockly.Msg.LANG_TEXT_SEGMENT_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#segment';
      Blockly.Msg.LANG_TEXT_SEGMENT_TITLE_SEGMENT = 'segment';
      Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_START = 'start';
      Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_LENGTH = 'lengte';
      Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_TEXT = 'tekst';
      Blockly.Msg.LANG_TEXT_SEGMENT_INPUT = 'segment  tekst %1 start %2 lengte %3';
      Blockly.Msg.LANG_TEXT_SEGMENT_AT_TOOLTIP = 'Haalt een deel van gegeven lengte uit de gegeven tekst\nstartend van de gegeven tekst op de gegeven positie. Positie \n1 betekent het begin van de tekst.';

          Blockly.Msg.LANG_TEXT_REPLACE_ALL_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#replaceall';
      Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_SEGMENT = 'segment';
      Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_TEXT = 'tekst';
      Blockly.Msg.LANG_TEXT_REPLACE_ALL_TITLE_REPLACE_ALL = 'vervang allemaal';
      Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_REPLACEMENT = 'vervanging';
      Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT = 'Vervang alle tekst %1 stukje tekst %2 vervangingstekst %3';
      Blockly.Msg.LANG_TEXT_REPLACE_ALL_TOOLTIP = 'Geeft een nieuwe tekst terug door alle stukjes tekst zoals het segment\nte vervangen door de vervangtekst.';


      // Lists Blocks.';
      Blockly.Msg.LANG_CATEGORY_LISTS = 'Lijsten';
      Blockly.Msg.LANG_LISTS_CREATE_EMPTY_HELPURL = 'http://en.wikipedia.org/wiki/Linked_list#Empty_lists';
      Blockly.Msg.LANG_LISTS_CREATE_EMPTY_TITLE = 'maak lege lijst';
      //Blockly.Msg.LANG_LISTS_CREATE_EMPTY_TOOLTIP = 'Returns a list, of length 0, containing no data records';

          Blockly.Msg.LANG_LISTS_CREATE_WITH_EMPTY_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#makealist';
      Blockly.Msg.LANG_LISTS_CREATE_WITH_TITLE_MAKE_LIST = 'maak een lijst';
      Blockly.Msg.LANG_LISTS_CREATE_WITH_TOOLTIP = 'Maak een lijst met een bepaald aantal items.';

      Blockly.Msg.LANG_LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = 'lijst';
      Blockly.Msg.LANG_LISTS_CREATE_WITH_CONTAINER_TOOLTIP = 'Voeg toe, verwijder of verander de volgorde van de secties om dit lijst blok opnieuw te configureren. ';

      Blockly.Msg.LANG_LISTS_CREATE_WITH_ITEM_TITLE = 'item';
      Blockly.Msg.LANG_LISTS_CREATE_WITH_ITEM_TOOLTIP = 'Voeg een element toe aan de lijst.';

      Blockly.Msg.LANG_LISTS_ADD_ITEM_TITLE = 'item';
      Blockly.Msg.LANG_LISTS_ADD_ITEM_TOOLTIP = 'Voeg een item toe aan de lijst.';
          Blockly.Msg.LANG_LISTS_ADD_ITEM_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#additems';

          Blockly.Msg.LANG_LISTS_SELECT_ITEM_TITLE_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#selectlistitem';
      Blockly.Msg.LANG_LISTS_SELECT_ITEM_TITLE_SELECT = 'kies een item uit de lijst';
      Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT_LIST = 'lijst';
      Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT_INDEX = 'index';
      Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT = 'Selecteer een element uit lijst %1 index %2';
      Blockly.Msg.LANG_LISTS_SELECT_ITEM_TOOLTIP = 'Geeft het item op positie index in de lijst.';

          Blockly.Msg.LANG_LISTS_IS_IN_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#inlist';
      Blockly.Msg.LANG_LISTS_IS_IN_TITLE_IS_IN = 'staat in een lijst?';
      Blockly.Msg.LANG_LISTS_IS_IN_INPUT_THING = 'ding';
      Blockly.Msg.LANG_LISTS_IS_IN_INPUT_LIST = 'lijst';
      Blockly.Msg.LANG_LISTS_IS_IN_INPUT = 'is in lijst? item %1 lijst %2';
      Blockly.Msg.LANG_LISTS_IS_IN_TOOLTIP = 'Geeft waar terug als het ding een item is dat in de lijst zit, anders wordt onwaar teruggegeven.';


          Blockly.Msg.LANG_LISTS_POSITION_IN_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#indexinlist';
      Blockly.Msg.LANG_LISTS_POSITION_IN_TITLE_POSITION = 'positie in lijst';
      Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT_THING = 'ding';
      Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT_LIST = 'lijst';
      Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT = 'index in lijst  item %1 lijst %2';
      Blockly.Msg.LANG_LISTS_POSITION_IN_TOOLTIP = 'Zoek de positie van het ding op in de lijst. Als het ding niet in de lijst zit, geef 0 terug.';


          Blockly.Msg.LANG_LISTS_PICK_RANDOM_ITEM_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#pickrandomitem';
      Blockly.Msg.LANG_LISTS_PICK_RANDOM_TITLE_PICK_RANDOM = 'kies een willekeurig item';
      Blockly.Msg.LANG_LISTS_PICK_RANDOM_ITEM_INPUT_LIST = 'lijst';
      Blockly.Msg.LANG_LISTS_PICK_RANDOM_TOOLTIP = 'Neem een willekeurig element van de lijst.';

          Blockly.Msg.LANG_LISTS_REPLACE_ITEM_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#replace';
      Blockly.Msg.LANG_LISTS_REPLACE_ITEM_TITLE_REPLACE = 'vervang element in de lijst';
      Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_LIST = 'lijst';
      Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_INDEX = 'index';
      Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_REPLACEMENT = 'vervanging';
      Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT = 'vervang lijst item  lijst %1 index %2 vervanging %3';
      Blockly.Msg.LANG_LISTS_REPLACE_ITEM_TOOLTIP = 'Vervangt het n\'de item in een lijst.';

          Blockly.Msg.LANG_LISTS_REMOVE_ITEM_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#removeitem';
      Blockly.Msg.LANG_LISTS_REMOVE_ITEM_TITLE_REMOVE = 'verwijder lijst item';
      Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT_LIST = 'lijst';
      Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT_INDEX = 'index';
      Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT = 'verwijder lijstitem  lijst %1 index %2';
      Blockly.Msg.LANG_LISTS_REMOVE_ITEM_TOOLTIP = 'Verwijdert het element op de gegeven positie uit de lijst.';

          /* Blockly.Msg.LANG_LISTS_REPEAT_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';/*
           Blockly.Msg.LANG_LISTS_REPEAT_TITLE_CREATE = 'create list with item';
           Blockly.Msg.LANG_LISTS_REPEAT_INPUT_REPEATED = 'repeated';
           Blockly.Msg.LANG_LISTS_REPEAT_INPUT_TIMES = 'times';
           Blockly.Msg.LANG_LISTS_REPEAT_TOOLTIP = 'Creates a list consisting of the given value\n' +';
           */

          Blockly.Msg.LANG_LISTS_LENGTH_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#lengthoflist';
      Blockly.Msg.LANG_LISTS_LENGTH_INPUT_LENGTH = 'lengte van de lijst';
      Blockly.Msg.LANG_LISTS_LENGTH_INPUT_LIST = 'lijst';
      Blockly.Msg.LANG_LISTS_LENGTH_INPUT = 'lengte van de lijst lijst %1';
      Blockly.Msg.LANG_LISTS_LENGTH_TOOLTIP = 'Telt het aantal elementen van een lijst';

          Blockly.Msg.LANG_LISTS_APPEND_LIST_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#append';
      Blockly.Msg.LANG_LISTS_APPEND_LIST_TITLE_APPEND = 'voeg toe aan lijst';
      Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT_LIST1 = 'lijst1';
      Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT_LIST2 = 'lijst2';
      Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT = 'voeg toe aan lijst  lijst1 %1 lijst2 %2';
      Blockly.Msg.LANG_LISTS_APPEND_LIST_TOOLTIP = 'Voeg alle elementen van list2 achteraan toe bij lijst1. Na deze toevoegoperatie zal lijst1 de toegevoegde elementen bevatten, lijst2 zal niet gewijzigd zijn.';


          Blockly.Msg.LANG_LISTS_ADD_ITEMS_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#additems';
      Blockly.Msg.LANG_LISTS_ADD_ITEMS_TITLE_ADD = 'voeg dingen toe aan lijst';
      Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT_LIST = '\ lijst';
      Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT_ITEM = 'item';
      Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT = 'voeg items to lijst lijst %1 item %2';
      Blockly.Msg.LANG_LISTS_ADD_ITEMS_TOOLTIP = 'Voeg items toe aan het einde van een lijst.';

      Blockly.Msg.LANG_LISTS_ADD_ITEMS_CONTAINER_TITLE_ADD = 'lijst';
      Blockly.Msg.LANG_LISTS_ADD_ITEMS_CONTAINER_TOOLTIP = 'Toevoegen, verwijderen of herschikken van secties om dit lijstblok te herconfigureren.';

          Blockly.Msg.LANG_LISTS_COPY_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#copy';
      Blockly.Msg.LANG_LISTS_COPY_TITLE_COPY = 'copieer lijst';
      Blockly.Msg.LANG_LISTS_COPY_INPUT_LIST = 'lijst';
      Blockly.Msg.LANG_LISTS_COPY_TOOLTIP = 'Maakt een kopie van een lijst. Sublijsten worden ook gekopieerd';

          Blockly.Msg.LANG_LISTS_IS_LIST_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#isalist';
      Blockly.Msg.LANG_LISTS_IS_LIST_TITLE_IS_LIST = 'is een lijst?';
      Blockly.Msg.LANG_LISTS_IS_LIST_INPUT_THING = 'ding';
      Blockly.Msg.LANG_LISTS_IS_LIST_TOOLTIP = 'Test of iets in een lijst zit.';

          Blockly.Msg.LANG_LISTS_TO_CSV_ROW_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#listtocsvrow';
      Blockly.Msg.LANG_LISTS_TO_CSV_ROW_TITLE_TO_CSV = 'lijst to csv rij';
      Blockly.Msg.LANG_LISTS_TO_CSV_ROW_INPUT_LIST = 'lijst';
      Blockly.Msg.LANG_LISTS_TO_CSV_ROW_TOOLTIP = 'Interpreteert de lijst als een rij van een tabel en geeft een CSV (door komma\'s gescheiden waarden) tekst terug die de rij representeert. Elk item in de rij lijst wordt beschouwd als een veld, er wordt naar verwezen met dubbele aanhalingstekens in de CSV tekst. Items worden gescheiden door een komma. De geretourneerde rij tekst heeft geen lijn separator aan het einde.';

          Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#listfromcsvrow';
      Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_TITLE_FROM_CSV = 'lijst van .csv rij';
      Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_INPUT_TEXT = 'tekst';
      Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_TOOLTIP = 'Ontleedt een tekst als een CSV (d.i. door komma\'s gescheiden waarde) opgemaakte rij om een \u200B\u200Blijst met velden te produceren. Als de rij tekst meerdere onbeschermde nieuwe regels (meerdere lijnen) bevat in de velden, krijg je een foutmelding. Je moet de rij tekst laten eindigen in een nieuwe regel of CRLF.';

          Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#listtocsvtable';
      Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_TITLE_TO_CSV = 'lijst naar .csv tabel';
      Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_INPUT_LIST = 'lijst';
      Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_TOOLTIP = 'Interpreteert de lijst als een tabel in rij-eerst formaat en geeft een CSV (door komma\'s gescheiden waarden) tekst terug die de tabel voorstelt. Elk element in de lijst zou op zijn beurt zelf een lijst moeten zijn die een rij van de CSV tabel voorstelt. Elk element in de rij lijst wordt beschouwd als een veld, waarvan de uiteindelijke CSV tekst zich binnen dubbele aanhalingstekens bevindt. In de teruggegeven tekst worden de elementen in de rijen gescheiden door komma\'s en worden de rijen zelf gescheiden door CRLF (\r\n).';

          Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#listfromcsvtable';
      Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_TITLE_FROM_CSV = 'lijst van een csv tabel';
      Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_INPUT_TEXT = 'tekst';
      Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_TOOLTIP = 'Ontleedt een tekst als een CSV (d.i. een door komma\'s gescheiden waarde) opgemaakte tabel om een \u200B\u200Blijst van rijen te produceren, elke rij is een lijst van velden. Rijen kunnen worden gescheiden door nieuwe lijnen (n) of CRLF (rn).';

          Blockly.Msg.LANG_LISTS_INSERT_ITEM_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#insert';
      Blockly.Msg.LANG_LISTS_INSERT_TITLE_INSERT_LIST = 'voeg een lijst element toe';
      Blockly.Msg.LANG_LISTS_INSERT_INPUT_LIST = 'lijst';
      Blockly.Msg.LANG_LISTS_INSERT_INPUT_INDEX = 'index';
      Blockly.Msg.LANG_LISTS_INSERT_INPUT_ITEM = 'item';
      Blockly.Msg.LANG_LISTS_INSERT_INPUT = 'voeg lijstitem toe  lijst %1 index %2 item %3';
      Blockly.Msg.LANG_LISTS_INSERT_TOOLTIP = 'Voeg een element toe op een specifieke plaats in een lijst.';

          Blockly.Msg.LANG_LISTS_IS_EMPTY_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#islistempty';
      Blockly.Msg.LANG_LISTS_TITLE_IS_EMPTY = 'is de lijst leeg?';
      Blockly.Msg.LANG_LISTS_INPUT_LIST = 'lijst';
      Blockly.Msg.LANG_LISTS_IS_EMPTY_TOOLTIP = 'Geeft \'waar\' terug als de lijst leeg is.';

          Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/lists#lookuppairs';
      Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_TITLE_LOOKUP_IN_PAIRS = 'zoek op in paren';
      Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_KEY = 'sleutel';
      Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_PAIRS = 'paren';
      Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_NOT_FOUND = 'nietGevonden';
      Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT = 'Zoek op per paar  sleutel %1 paren %2 nietGevonden %3';
      Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_TOOLTIP = 'Geeft de waarde terug die hoort bij de sleutel in een lijst van paren';

          /*Blockly.Msg.LANG_LISTS_INDEX_OF_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
           Blockly.Msg.LANG_LISTS_INDEX_OF_TITLE_FIND = 'find';
           Blockly.Msg.LANG_LISTS_INDEX_OF_INPUT_OCCURRENCE = 'occurrence of item';
           Blockly.Msg.LANG_LISTS_INDEX_OF_INPUT_IN_LIST = 'in list';
           Blockly.Msg.LANG_LISTS_INDEX_OF_TOOLTIP = 'Returns the index of the first/last occurrence\n' +';
           'of the item in the list.\n' +';
           'Returns 0 if text is not found.';
           Blockly.Msg.LANG_LISTS_INDEX_OF_FIRST = 'first';
           Blockly.Msg.LANG_LISTS_INDEX_OF_LAST = 'last';

           Blockly.Msg.LANG_LISTS_GET_INDEX_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
           Blockly.Msg.LANG_LISTS_GET_INDEX_TITLE_GET = 'get item at';
           Blockly.Msg.LANG_LISTS_GET_INDEX_INPUT_IN_LIST = 'in list';
           Blockly.Msg.LANG_LISTS_GET_INDEX_TOOLTIP = 'Returns the value at the specified position in a list.';

           Blockly.Msg.LANG_LISTS_SET_INDEX_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
           Blockly.Msg.LANG_LISTS_SET_INDEX_INPUT_SET = 'set item at';
           Blockly.Msg.LANG_LISTS_SET_INDEX_INPUT_IN_LIST = 'in list';
           Blockly.Msg.LANG_LISTS_SET_INDEX_INPUT_TO = 'to';
           Blockly.Msg.LANG_LISTS_SET_INDEX_TOOLTIP = 'Sets the value at the specified position in a list.';*/

      // Variables Blocks.';
          Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/variables#global';
      Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TITLE_INIT = 'Initializeer globaal';
      Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_NAME = 'naam';
      Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TO = 'tot';
      Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_COLLAPSED_TEXT = 'globaal';
      Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TOOLTIP = 'Maakt een globale variabele en geeft die de waarde van de geconnecteerde blokken';

          Blockly.Msg.LANG_VARIABLES_GET_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/variables#get';
      Blockly.Msg.LANG_VARIABLES_GET_TITLE_GET = 'krijg';
      Blockly.Msg.LANG_VARIABLES_GET_COLLAPSED_TEXT = 'krijg';
      Blockly.Msg.LANG_VARIABLES_GET_TOOLTIP = 'Geeft de waarde van deze variabele terug.';

          Blockly.Msg.LANG_VARIABLES_SET_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/variables#set';
      Blockly.Msg.LANG_VARIABLES_SET_TITLE_SET = 'zet';
      Blockly.Msg.LANG_VARIABLES_SET_TITLE_TO = 'tot';
      Blockly.Msg.LANG_VARIABLES_SET_COLLAPSED_TEXT = 'ingesteld';
      Blockly.Msg.LANG_VARIABLES_SET_TOOLTIP = 'Zet deze variabele gelijk aan de input.';
      Blockly.Msg.LANG_VARIABLES_VARIABLE = '\ variabele';

          Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/variables#do';
      Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TITLE_INIT = 'initializeer lokaal';
      Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_DEFAULT_NAME = 'naam';
      Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_INPUT_TO = 'tot';
      Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_IN_DO = 'in';
      Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_COLLAPSED_TEXT = 'lokaal';
      Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TOOLTIP = 'Laat je toe variabelen te maken die enkel toegankelijk zijn in het doe deel van dit blok.';
      Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TRANSLATED_NAME = 'initialiseer lokale variable in doe';

          Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/variables#return';
          /* // These don't differ between the statement and expression';
           Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TITLE_INIT = 'initialize local';
           Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_INPUT_NAME = 'name';
           Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_INPUT_TO = 'to';
           */
      Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_IN_RETURN = 'in';
      Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_COLLAPSED_TEXT = 'lokaal';
      Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TOOLTIP = 'Laat je toe om variabelen te maken die je alleen kan gebruiken in het deel van dit blok dat iets teruggeeft.';
      Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TRANSLATED_NAME = 'initializeer lokaal in return';

      Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_CONTAINER_TITLE_LOCAL_NAMES = 'lokale namen';
      Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_CONTAINER_TOOLTIP = '';

      Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_ARG_TITLE_NAME = 'naam';
      Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_ARG_DEFAULT_VARIABLE = 'x';

      // Procedures Blocks.';
          Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/procedures#do';
      Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DEFINE = 'tot';
      Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_PROCEDURE = 'procedure';
      Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DO = 'doe';
      Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_COLLAPSED_PREFIX = 'tot ';
      Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_TOOLTIP = 'Een procedure die geen waarde teruggeeft.';

          Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/procedures#doreturn';
      Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_THEN_RETURN = 'resultaat';
      Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_DO = 'doe';
      Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_RETURN = 'resultaat';
      Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_TOOLTIP = 'Voert de blokken in \'doe\' uit en geeft een statement terug. Handig als je een procedure wil uitvoeren alvorens een waarde terug te geven aan een variabele.';
      Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_COLLAPSED_TEXT = 'doe/resultaat';

          Blockly.Msg.LANG_PROCEDURES_DEFRETURN_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/procedures#return';
      Blockly.Msg.LANG_PROCEDURES_DEFRETURN_DEFINE = 'tot';
      Blockly.Msg.LANG_PROCEDURES_DEFRETURN_PROCEDURE = 'procedure';
      Blockly.Msg.LANG_PROCEDURES_DEFRETURN_DO = 'doe';
      Blockly.Msg.LANG_PROCEDURES_DEFRETURN_RETURN = 'resultaat';
      Blockly.Msg.LANG_PROCEDURES_DEFRETURN_COLLAPSED_PREFIX = 'to ';
      Blockly.Msg.LANG_PROCEDURES_DEFRETURN_TOOLTIP = 'Een procedure die een resultaat teruggeeft.';

      Blockly.Msg.LANG_PROCEDURES_DEF_DUPLICATE_WARNING = 'Waarschuwing:\nDeze procedure heeft\ndubbele inputs.';

          Blockly.Msg.LANG_PROCEDURES_GET_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/procedures#get';

          Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/procedures#do';
      Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_CALL = 'aanroep ';
      Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_PROCEDURE = 'procedure';
      Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_COLLAPSED_PREFIX = 'roep op ';
      Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_TOOLTIP = 'Roep een procedure op die geen waarde teruggeeft.';
      Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_TRANSLATED_NAME = 'functie die niets teruggeeft';

          Blockly.Msg.LANG_PROCEDURES_CALLRETURN_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/procedures#return';
      Blockly.Msg.LANG_PROCEDURES_CALLRETURN_CALL = 'roep aan';
      Blockly.Msg.LANG_PROCEDURES_CALLRETURN_PROCEDURE = 'procedure';
      Blockly.Msg.LANG_PROCEDURES_CALLRETURN_COLLAPSED_PREFIX = 'aanroep ';
      Blockly.Msg.LANG_PROCEDURES_CALLRETURN_TOOLTIP = 'Roep een procedure op die iets teruggeeft.';
      Blockly.Msg.LANG_PROCEDURES_CALLRETURN_TRANSLATED_NAME = 'oproep weergave';

      Blockly.Msg.LANG_PROCEDURES_MUTATORCONTAINER_TITLE = 'invoer';
      Blockly.Msg.LANG_PROCEDURES_MUTATORARG_TITLE = 'invoer:';

      Blockly.Msg.LANG_PROCEDURES_HIGHLIGHT_DEF = 'Markeer Procedure';

      Blockly.Msg.LANG_PROCEDURES_MUTATORCONTAINER_TOOLTIP = '';
      Blockly.Msg.LANG_PROCEDURES_MUTATORARG_TOOLTIP = '';

      // Components Blocks.';
          Blockly.Msg.UNDEFINED_BLOCK_TOOLTIP = 'This block is not defined. Delete this block!';

          Blockly.Msg.LANG_COMPONENT_BLOCK_HELPURL = '';
      Blockly.Msg.LANG_COMPONENT_BLOCK_TITLE_WHEN = 'wanneer';
      Blockly.Msg.LANG_COMPONENT_BLOCK_TITLE_DO = 'doe';

          Blockly.Msg.LANG_COMPONENT_BLOCK_METHOD_HELPURL = '';
      Blockly.Msg.LANG_COMPONENT_BLOCK_METHOD_TITLE_CALL = 'aanroep ';

          Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_HELPURL = '';
      Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_TITLE_CALL = 'aanroep ';
      Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_TITLE_FOR_COMPONENT = 'voor component';

          Blockly.Msg.LANG_COMPONENT_BLOCK_GETTER_HELPURL = '';

          Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_GETTER_HELPURL = '';
      Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_GETTER_TITLE_OF_COMPONENT = 'van component';

          Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_HELPURL = '';
      Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_TITLE_SET = 'stel in';
      Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_TITLE_TO = '\ tot';

          Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_HELPURL = '';
      Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_SET = 'zet';
      Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_TO = '\ tot';
      Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_OF_COMPONENT = 'van de component';

      ///////////////////';
          /* HelpURLs for Component Blocks */

      //User Interface Components';
          Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_HELPURL = '/reference/components/userinterface.html#Button';
          Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_PROPERTIES_HELPURL = '/reference/components/userinterface.html#buttonproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_EVENTS_HELPURL = '/reference/components/userinterface.html#buttonevents';

          Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_HELPURL = '/reference/components/userinterface.html#CheckBox';
          Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_PROPERTIES_HELPURL = '/reference/components/userinterface.html#checkboxproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_EVENTS_HELPURL = '/reference/components/userinterface.html#checkboxevents';

          Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_HELPURL = '/reference/components/sensors.html#Clock';
          Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_PROPERTIES_HELPURL = '/reference/components/sensors.html#Clock';
          Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_EVENTS_HELPURL = '/reference/components/sensors.html#Clock';
          Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_METHODS_HELPURL = '/reference/components/sensors.html#Clock';

          Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_HELPURL = '/reference/components/userinterface.html#Image';
          Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_PROPERTIES_HELPURL = '/reference/components/userinterface.html#imageproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_EVENTS_HELPURL = '/reference/components/userinterface.html#imageevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_METHODS_HELPURL = '/reference/components/userinterface.html#imagemethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_HELPURL = '/reference/components/userinterface.html#Label';
          Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_PROPERTIES_HELPURL = '/reference/components/userinterface.html#labelproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_EVENTS_HELPURL = '/reference/components/userinterface.html#labelevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_METHODS_HELPURL = '/reference/components/userinterface.html#labelmethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_HELPURL = '/reference/components/userinterface.html#ListPicker';
          Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_PROPERTIES_HELPURL = '/reference/components/userinterface.html#listpickerproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_EVENTS_HELPURL = '/reference/components/userinterface.html#listpickerevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_METHODS_HELPURL = '/reference/components/userinterface.html#listpickermethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_HELPURL = '/reference/components/userinterface.html#Notifier';
          Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_PROPERTIES_HELPURL = '/reference/components/userinterface.html#notifierproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_EVENTS_HELPURL = '/reference/components/userinterface.html#notifierevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_METHODS_HELPURL = '/reference/components/userinterface.html#notifiermethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_PASSWORDTEXTBOX_HELPURL = '/reference/components/userinterface.html#PasswordTextBox';
          Blockly.Msg.LANG_COMPONENT_BLOCK_PASSWORDTEXTBOX_PROPERTIES_HELPURL = '/reference/components/userinterface.html#pwdboxproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_PASSWORDTEXTBOX_EVENTS_HELPURL = '/reference/components/userinterface.html#pwdboxevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_PASSWORDTEXTBOX_METHODS_HELPURL = '/reference/components/userinterface.html#pwdboxmethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_HELPURL = '/reference/components/userinterface.html#Screen';
          Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_PROPERTIES_HELPURL = '/reference/components/userinterface.html#screenproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_EVENTS_HELPURL = '/reference/components/userinterface.html#screenevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_METHODS_HELPURL = '/reference/components/userinterface.html#screenmethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_HELPURL = '/reference/components/userinterface.html#Slider';
          Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_PROPERTIES_HELPURL = '/reference/components/userinterface.html#sliderproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_EVENTS_HELPURL = '/reference/components/userinterface.html#sliderevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_METHODS_HELPURL = '/reference/components/userinterface.html#slidermethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_HELPURL = '/reference/components/userinterface.html#TextBox';
          Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_PROPERTIES_HELPURL = '/reference/components/userinterface.html#textboxproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_EVENTS_HELPURL = '/reference/components/userinterface.html#textboxevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_METHODS_HELPURL = '/reference/components/userinterface.html#textboxmethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_HELPURL = '/reference/components/userinterface.html#WebViewer';
          Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_PROPERTIES_HELPURL = '/reference/components/userinterface.html#webviewerproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_EVENTS_HELPURL = '/reference/components/userinterface.html#webviewerevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_METHODS_HELPURL = '/reference/components/userinterface.html#webviewermethods';

      //Layout components';
          Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZARRANGE_HELPURL = '/reference/components/layout.html#HorizontalArrangement';
          Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZARRANGE_PROPERTIES_HELPURL = '/reference/components/layout.html#horizarrangeproperties';

          Blockly.Msg.LANG_COMPONENT_BLOCK_VERTARRANGE_HELPURL = '/reference/components/layout.html#VerticalArrangement';
          Blockly.Msg.LANG_COMPONENT_BLOCK_VERTARRANGE_PROPERTIES_HELPURL = '/reference/components/layout.html#vertarrangeproperties';

          Blockly.Msg.LANG_COMPONENT_BLOCK_TABLEARRANGE_HELPURL = '/reference/components/layout.html#TableArrangement';
          Blockly.Msg.LANG_COMPONENT_BLOCK_TABLEARRANGE_PROPERTIES_HELPURL = '/reference/components/layout.html#tablearrangeproperties';

      //Media components';
          Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_HELPURL = '/reference/components/media.html#Camcorder';
          Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_PROPERTIES_HELPURL = '/reference/components/media.html#camcorderproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_EVENTS_HELPURL = '/reference/components/media.html#camcorderevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_METHODS_HELPURL = '/reference/components/media.html#camcordermethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_HELPURL = '/reference/components/media.html#Camera';
          Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_PROPERTIES_HELPURL = '/reference/components/media.html#cameraproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_EVENTS_HELPURL = '/reference/components/media.html#cameraevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_METHODS_HELPURL = '/reference/components/media.html#cameramethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGEPICKER_HELPURL = '/reference/components/media.html#ImagePicker';
          Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGEPICKER_PROPERTIES_HELPURL = '/reference/components/media.html#imagepickerproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGEPICKER_EVENTS_HELPURL = '/reference/components/media.html#imagepickerevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGEPICKER_METHODS_HELPURL = '/reference/components/media.html#imagepickermethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_HELPURL = '/reference/components/media.html#Player';
          Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_PROPERTIES_HELPURL = '/reference/components/media.html#playerproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_EVENTS_HELPURL = '/reference/components/media.html#playerevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_METHODS_HELPURL = '/reference/components/media.html#playermethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_HELPURL = '/reference/components/media.html#Sound';
          Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_PROPERTIES_HELPURL = '/reference/components/media.html#soundproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_EVENTS_HELPURL = '/reference/components/media.html#soundevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_METHODS_HELPURL = '/reference/components/media.html#soundmethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_SOUNDRECORDER_HELPURL = '/reference/components/media.html#SoundRecorder';
          Blockly.Msg.LANG_COMPONENT_BLOCK_SOUNDRECORDER_PROPERTIES_HELPURL = '/reference/components/media.html#soundrecorderproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_SOUNDRECORDER_EVENTS_HELPURL = '/reference/components/media.html#soundrecorderevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_SOUNDRECORDER_METHODS_HELPURL = '/reference/components/media.html#soundrecordermethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECHRECOGNIZER_HELPURL = '/reference/components/media.html#SpeechRecognizer';
          Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECHRECOGNIZER_PROPERTIES_HELPURL = '/reference/components/media.html#speechrecognizerproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECHRECOGNIZER_EVENTS_HELPURL = '/reference/components/media.html#speechrecognizerevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECHRECOGNIZER_METHODS_HELPURL = '/reference/components/media.html#speechrecognizermethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTTOSPEECH_HELPURL = '/reference/components/media.html#TextToSpeech';
          Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTTOSPEECH_PROPERTIES_HELPURL = '/reference/components/media.html#texttospeechproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTTOSPEECH_EVENTS_HELPURL = '/reference/components/media.html#texttospeechevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTTOSPEECH_METHODS_HELPURL = '/reference/components/media.html#texttospeechmethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEOPLAYER_HELPURL = '/reference/components/media.html#VideoPlayer';
          Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEOPLAYER_PROPERTIES_HELPURL = '/reference/components/media.html#videoplayerproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEOPLAYER_EVENTS_HELPURL = '/reference/components/media.html#videoplayerevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEOPLAYER_METHODS_HELPURL = '/reference/components/media.html#videoplayermethods';

      // Drawing and Animation components';
          Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_HELPURL = '/reference/components/animation.html#Ball';
          Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_PROPERTIES_HELPURL = '/reference/components/animation.html#ballproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_EVENTS_HELPURL = '/reference/components/animation.html#ballevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_METHODS_HELPURL = '/reference/components/animation.html#ballmethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_HELPURL = '/reference/components/animation.html#Canvas';
          Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_PROPERTIES_HELPURL = '/reference/components/animation.html#canvasproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_EVENTS_HELPURL = '/reference/components/animation.html#canvasevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_METHODS_HELPURL = '/reference/components/animation.html#canvasmethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGESPRITE_HELPURL = '/reference/components/animation.html#ImageSprite';
          Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGESPRITE_PROPERTIES_HELPURL = '/reference/components/animation.html#imagespriteproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGESPRITE_EVENTS_HELPURL = '/reference/components/animation.html#imagespriteevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGESPRITE_METHODS_HELPURL = '/reference/components/animation.html#imagespritemethods';

      //Sensor components';
          Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETERSENSOR_HELPURL = '/reference/components/sensors.html#AccelerometerSensor';
          Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETERSENSOR_PROPERTIES_HELPURL = '/reference/components/sensors.html#accelerometersensorproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETERSENSOR_EVENTS_HELPURL = '/reference/components/sensors.html#accelerometersensorevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETERSENSOR_METHODS_HELPURL = '/reference/components/sensors.html#accelerometersensormethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODESCANNER_HELPURL = '/reference/components/sensors.html#BarcodeScanner';
          Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODESCANNER_PROPERTIES_HELPURL = '/reference/components/sensors.html#barcodescannerproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODESCANNER_EVENTS_HELPURL = '/reference/components/sensors.html#barcodescannerevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODESCANNER_METHODS_HELPURL = '/reference/components/sensors.html#barcodescannermethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_GYROSCOPESENSOR_HELPURL = '/reference/components/sensors.html#GyroscopeSensor';
          Blockly.Msg.LANG_COMPONENT_BLOCK_GYROSCOPESENSOR_PROPERTIES_HELPURL = '/reference/components/sensors.html#gyroscopesensorproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_GYROSCOPESENSOR_EVENTS_HELPURL = '/reference/components/sensors.html#gyroscopesensorevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_GYROSCOPESENSOR_METHODS_HELPURL = '/reference/components/sensors.html#gyroscopesensormethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATIONSENSOR_HELPURL = '/reference/components/sensors.html#LocationSensor';
          Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATIONSENSOR_PROPERTIES_HELPURL = '/reference/components/sensors.html#locationsensorproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATIONSENSOR_EVENTS_HELPURL = '/reference/components/sensors.html#locationsensorevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATIONSENSOR_METHODS_HELPURL = '/reference/components/sensors.html#locationsensormethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATIONSENSOR_HELPURL = '/reference/components/sensors.html#OrientationSensor';
          Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATIONSENSOR_PROPERTIES_HELPURL = '/reference/components/sensors.html#orientationsensorproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATIONSENSOR_EVENTS_HELPURL = '/reference/components/sensors.html#orientationsensorevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATIONSENSOR_METHODS_HELPURL = '/reference/components/sensors.html#orientationsensormethods';

      //Social components';
          Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACTPICKER_HELPURL = '/reference/components/social.html#ContactPicker';
          Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACTPICKER_PROPERTIES_HELPURL = '/reference/components/social.html#contactpickerproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACTPICKER_EVENTS_HELPURL = '/reference/components/social.html#contactpickerevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACTPICKER_METHODS_HELPURL = '/reference/components/social.html#contactpickermethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_EMAILPICKER_HELPURL = '/reference/components/social.html#EmailPicker';
          Blockly.Msg.LANG_COMPONENT_BLOCK_EMAILPICKER_PROPERTIES_HELPURL = '/reference/components/social.html#emailpickerproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_EMAILPICKER_EVENTS_HELPURL = '/reference/components/social.html#emailpickerevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_EMAILPICKER_METHODS_HELPURL = '/reference/components/social.html#emailpickermethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_PHONECALL_HELPURL = '/reference/components/social.html#PhoneCall';
          Blockly.Msg.LANG_COMPONENT_BLOCK_PHONECALL_PROPERTIES_HELPURL = '/reference/components/social.html#phonecallproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_PHONECALL_EVENTS_HELPURL = '/reference/components/social.html#phonecallevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_PHONECALL_METHODS_HELPURL = '/reference/components/social.html#phonecallmethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_PHONENUMBERPICKER_HELPURL = '/reference/components/social.html#PhoneNumberPicker';
          Blockly.Msg.LANG_COMPONENT_BLOCK_PHONENUMBERPICKER_PROPERTIES_HELPURL = '/reference/components/social.html#phonenumberpickerproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_PHONENUMBERPICKER_EVENTS_HELPURL = '/reference/components/social.html#phonenumberpickerevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_PHONENUMBERPICKER_METHODS_HELPURL = '/reference/components/social.html#phonenumberpickermethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_HELPURL = '/reference/components/social.html#Texting';
          Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_PROPERTIES_HELPURL = '/reference/components/social.html#textingproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_EVENTS_HELPURL = '/reference/components/social.html#textingevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_METHODS_HELPURL = '/reference/components/social.html#textingmethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_HELPURL = '/reference/components/social.html#Twitter';
          Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_PROPERTIES_HELPURL = '/reference/components/social.html#twitterproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_EVENTS_HELPURL = '/reference/components/social.html#twitterevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_METHODS_HELPURL = '/reference/components/social.html#twittermethods';

      //Storage Components';
          Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLESCONTROL_HELPURL = '/reference/components/storage.html#FusiontablesControl';
          Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLESCONTROL_PROPERTIES_HELPURL = '/reference/components/storage.html#fusiontablescontrolproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLESCONTROL_EVENTS_HELPURL = '/reference/components/storage.html#fusiontablescontrolevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLESCONTROL_METHODS_HELPURL = '/reference/components/storage.html#fusiontablescontrolmethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_HELPURL = '/reference/components/storage.html#TinyDB';
          Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_PROPERTIES_HELPURL = '/reference/components/storage.html#tinydbproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_EVENTS_HELPURL = '/reference/components/storage.html#tinydbevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_METHODS_HELPURL = '/reference/components/storage.html#tinydbmethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_HELPURL = '/reference/components/storage.html#TinyWebDB';
          Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_PROPERTIES_HELPURL = '/reference/components/storage.html#tinywebdbproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_EVENTS_HELPURL = '/reference/components/storage.html#tinywebdbevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_METHODS_HELPURL = '/reference/components/storage.html#tinywebdbmethods';

      //Connectivity components';
          Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_HELPURL = '/reference/components/connectivity.html#ActivityStarter';
          Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_PROPERTIES_HELPURL = '/reference/components/connectivity.html#activitystarterproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_EVENTS_HELPURL = '/reference/components/connectivity.html#activitystarterevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_METHODS_HELPURL = '/reference/components/connectivity.html#activitystartermethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_HELPURL = '/reference/components/connectivity.html#BluetoothClient';
          Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_PROPERTIES_HELPURL = '/reference/components/connectivity.html#bluetoothclientproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_EVENTS_HELPURL = '/reference/components/connectivity.html#bluetoothclientevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_METHODS_HELPURL = '/reference/components/connectivity.html#bluetoothclientmethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_HELPURL = '/reference/components/connectivity.html#BluetoothServer';
          Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_PROPERTIES_HELPURL = '/reference/components/connectivity.html#bluetoothserverproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_EVENTS_HELPURL = '/reference/components/connectivity.html#bluetoothserverevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_METHODS_HELPURL = '/reference/components/connectivity.html#bluetoothservermethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_HELPURL = '/reference/components/connectivity.html#Web';
          Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_PROPERTIES_HELPURL = '/reference/components/connectivity.html#webproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_EVENTS_HELPURL = '/reference/components/connectivity.html#webevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_METHODS_HELPURL = '/reference/components/connectivity.html#webmethods';

      //Lego mindstorms components';
          Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDIRECT_HELPURL = '/reference/components/legomindstorms.html#NxtDirectCommands';
          Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDIRECT_PROPERTIES_HELPURL = '/reference/components/legomindstorms.html#nxtdirectproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDIRECT_METHODS_HELPURL = '/reference/components/legomindstorms.html#nxtdirectmethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_HELPURL = '/reference/components/legomindstorms.html#NxtColorSensor';
          Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_PROPERTIES_HELPURL = '/reference/components/legomindstorms.html#nxtcolorproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_EVENTS_HELPURL = '/reference/components/legomindstorms.html#nxtcolorevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_METHODS_HELPURL = '/reference/components/legomindstorms.html#nxtcolormethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_HELPURL = '/reference/components/legomindstorms.html#NxtLightSensor';
          Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_PROPERTIES_HELPURL = '/reference/components/legomindstorms.html#nxtlightproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_EVENTS_HELPURL = '/reference/components/legomindstorms.html#nxtlightevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_METHODS_HELPURL = '/reference/components/legomindstorms.html#nxtlightmethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_HELPURL = '/reference/components/legomindstorms.html#NxtSoundSensor';
          Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_PROPERTIES_HELPURL = '/reference/components/legomindstorms.html#nxtsoundproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_EVENTS_HELPURL = '/reference/components/legomindstorms.html#nxtsoundevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_METHODS_HELPURL = '/reference/components/legomindstorms.html#nxtsoundmethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_HELPURL = '/reference/components/legomindstorms.html#NxtTouchSensor';
          Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_PROPERTIES_HELPURL = '/reference/components/legomindstorms.html#nxttouchproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_EVENTS_HELPURL = '/reference/components/legomindstorms.html#nxttouchevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_METHODS_HELPURL = '/reference/components/legomindstorms.html#nxttouchmethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_HELPURL = '/reference/components/legomindstorms.html#NxtUltrasonicSensor';
          Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_PROPERTIES_HELPURL = '/reference/components/legomindstorms.html#nxtultrasonicproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_EVENTS_HELPURL = '/reference/components/legomindstorms.html#nxtultrasonicevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_METHODS_HELPURL = '/reference/components/legomindstorms.html#nxtultrasonicmethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDRIVE_HELPURL = '/reference/components/legomindstorms.html#NxtDrive';
          Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDRIVE_PROPERTIES_HELPURL = '/reference/components/legomindstorms.html#nxtdriveproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDRIVE_METHODS_HELPURL = '/reference/components/legomindstorms.html#nxtdrivemethods';

      //Experimental components';
          // FirebaseDB';
          Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_HELPURL = '/reference/components/experimental.html#FirebaseDB';
          Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_PROPERTIES_HELPURL = '/reference/components/experimental.html#firebasedbproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_EVENTS_HELPURL = '/reference/components/experimental.html#firebasedbevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_METHODS_HELPURL = '/reference/components/experimental.html#firebasedbmethods';

      //Internal components';
          Blockly.Msg.LANG_COMPONENT_BLOCK_GAMECLIENT_HELPURL = '/reference/components/internal.html#GameClient';
          Blockly.Msg.LANG_COMPONENT_BLOCK_GAMECLIENT_PROPERTIES_HELPURL = '/reference/components/internal.html#gameclientproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_GAMECLIENT_EVENTS_HELPURL = '/reference/components/internal.html#gameclientevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_GAMECLIENT_METHODS_HELPURL = '/reference/components/internal.html#gameclientmethods';

          Blockly.Msg.LANG_COMPONENT_BLOCK_VOTING_HELPURL = '/reference/components/internal.html#Voting';
          Blockly.Msg.LANG_COMPONENT_BLOCK_VOTING_PROPERTIES_HELPURL = '/reference/components/internal.html#votingproperties';
          Blockly.Msg.LANG_COMPONENT_BLOCK_VOTING_EVENTS_HELPURL = '/reference/components/internal.html#votingevents';
          Blockly.Msg.LANG_COMPONENT_BLOCK_VOTING_METHODS_HELPURL = '/reference/components/internal.html#votingmethods';

      //Misc';
      Blockly.Msg.SHOW_WARNINGS = 'Toon Waarschuwingen';
      Blockly.Msg.HIDE_WARNINGS = 'Waarschuwingen Verbergen';
      Blockly.Msg.MISSING_SOCKETS_WARNINGS = 'Je moet alle connecties opvullen met blokken';
      Blockly.Msg.WRONG_TYPE_BLOCK_WARINGS = 'Dit blok moet worden geconnecteerd met een gebeurtenisblok of de definitie van een procedure';

      // Messages from replmgr.js';
      Blockly.Msg.REPL_ERROR_FROM_COMPANION = 'Fout van de Companion';
      Blockly.Msg.REPL_NETWORK_CONNECTION_ERROR = 'Fout netwerkverbinding';
      Blockly.Msg.REPL_NETWORK_ERROR = 'Netwerkfout';
      Blockly.Msg.REPL_NETWORK_ERROR_RESTART = 'Netwerk Communicatie Fout met Companion. <br />Probeer eens de Companion te herstarten en opnieuw te connecteren.';
      Blockly.Msg.REPL_OK = 'OK';
      Blockly.Msg.REPL_COMPANION_VERSION_CHECK = 'Versie controle van de Companion';
      Blockly.Msg.REPL_COMPANION_OUT_OF_DATE = 'Jouw Companion App is te oud. Klik "OK" om bijwerken te starten. Bekijk jouw ';
      Blockly.Msg.REPL_EMULATORS = 'emulators';
      Blockly.Msg.REPL_DEVICES = 'apparaten';
      Blockly.Msg.REPL_APPROVE_UPDATE = '\ scherm omdat je gevraagd gaat worden om een update goed te keuren.';
      Blockly.Msg.REPL_NOT_NOW = 'Niet Nu';
      Blockly.Msg.REPL_COMPANION_OUT_OF_DATE1 = 'De companion die je gebruikt is verouderd.<br/><br/>Deze versie van de App Inventor moet gebruikt worden met Companion versie';
      Blockly.Msg.REPL_COMPANION_OUT_OF_DATE_IMMEDIATE = 'Je gebrukt een oude Companion. Je zou zo snel mogelijk moeten upgraden naar MIT AI2 Companion. Als je automatisch updaten hebt ingesteld in de store, gebeurd de update binnenkort vanzelf.';
          Blockly.Msg.REPL_COMPANION_WRONG_PACKAGE = 'The Companion you are using was built for different instance of App Inventor. To obtain the correct companion look on the App Inventor screen under Help->Companion Information menu.';
      Blockly.Msg.REPL_DISMISS = 'Negeer';
      Blockly.Msg.REPL_SOFTWARE_UPDATE = 'Software bijwerken';
      Blockly.Msg.REPL_OK_LOWER = 'OK';
      Blockly.Msg.REPL_GOT_IT = 'Begrepen';
      Blockly.Msg.REPL_UPDATE_INFO = 'De update wordt nu ge\u00EFnstalleerd op je toestel. Hou je scherm (of emulator) in het oog en keur de installatie goed wanneer je dat gevraagd wordt.<br /><br />BELANGRIJK: Wanneer de update afloopt, kies "VOLTOOID" (klik niet op "open"). Ga dan naar App Inventor in je web browser, klik op het "Connecteer" menu en kies "Herstart Verbinding". Verbind dan het toestel.';

          Blockly.Msg.REPL_UPDATE_NO_UPDATE = 'No Update is Available';
          Blockly.Msg.REPL_UPDATE_NO_CONNECTION = 'You must be connected to a Companion to update it';
      Blockly.Msg.REPL_UNABLE_TO_UPDATE = 'Het is niet gelukt een update naar het toestel/emulator te sturen.';
      Blockly.Msg.REPL_UNABLE_TO_LOAD = 'Opladen naar de App Inventor server mislukt';
      Blockly.Msg.REPL_UNABLE_TO_LOAD_NO_RESPOND = 'Kan geen update laden van de App Inventor server (de server antwoordt niet)';
      Blockly.Msg.REPL_NOW_DOWNLOADING = 'We downloaden nu een update van de App Inventor server.  Even geduld aub.';
      Blockly.Msg.REPL_RUNTIME_ERROR = 'Uitvoeringsfout';
      Blockly.Msg.REPL_NO_ERROR_FIVE_SECONDS = '<br/><i>Merk op:</i>&nbsp,Je zal geen andere foutmeldingen zien gedurende de volgende 5 seconden.';
      Blockly.Msg.REPL_CONNECTING_USB_CABLE = 'Aan het connecteren via USB kabel';
      Blockly.Msg.REPL_STARTING_EMULATOR = 'Bezig met opstarten van de Android Emulator<br/>Even geduld: Dit kan een minuut of twee duren.';
      Blockly.Msg.REPL_CONNECTING = 'Verbinden...';
      Blockly.Msg.REPL_CANCEL = 'Annuleren';
      Blockly.Msg.REPL_GIVE_UP = 'Opgeven';
      Blockly.Msg.REPL_KEEP_TRYING = 'Blijf Proberen';
      Blockly.Msg.REPL_CONNECTION_FAILURE1 = 'Verbindingsfout';
      Blockly.Msg.REPL_NO_START_EMULATOR = 'Het is niet gelukt de MIT AI Companion te starten in de Emulator';
      Blockly.Msg.REPL_PLUGGED_IN_Q = 'Aangesloten?';
      Blockly.Msg.REPL_AI_NO_SEE_DEVICE = 'AI2 ziet je toestel niet, zorg ervoor dat de kabel is aangesloten en dat de besturingsprogramma\'s juist zijn.';
      Blockly.Msg.REPL_HELPER_Q = 'Helper?';
      Blockly.Msg.REPL_HELPER_NOT_RUNNING = 'De aiStarter helper lijkt niet opgestart<br /><a href="http://appinventor.mit.edu" target="_blank">hulp nodig?</a>';
      Blockly.Msg.REPL_USB_CONNECTED_WAIT = 'USB verbonden, wachten ';
      Blockly.Msg.REPL_SECONDS_ENSURE_RUNNING = '\ seconden om er zeker van te zijn dat alles draait.';
      Blockly.Msg.REPL_EMULATOR_STARTED = 'Emulator gestart, wachten ';
      Blockly.Msg.REPL_STARTING_COMPANION_ON_PHONE = 'Bezig het opstarten van de Companion App op de aangesloten telefoon.';
      Blockly.Msg.REPL_STARTING_COMPANION_IN_EMULATOR = 'Companion App wordt opgestart in de emulator.';
      Blockly.Msg.REPL_COMPANION_STARTED_WAITING = 'Companion start op, wachten';
      Blockly.Msg.REPL_VERIFYING_COMPANION = 'Kijken of de Companion gestart is...';
      Blockly.Msg.REPL_CONNECT_TO_COMPANION = 'Connecteer met de Companion';
      Blockly.Msg.REPL_TRY_AGAIN1 = 'Connecteren met de MIT AI2 Companion is mislukt, probeer het eens opnieuw.';
      Blockly.Msg.REPL_YOUR_CODE_IS = 'Jouw code is';
      Blockly.Msg.REPL_DO_YOU_REALLY_Q = 'Wil Je Dit Echt?';
      Blockly.Msg.REPL_FACTORY_RESET = 'Deze probeert jouw Emulator te herstellen in zijn initi\u00EBle staat. Als je eerder je Companion had geupdate in de emulator, ga je dit waarschijnlijk op nieuw moeten doen. ';

      // Messages from Blockly.js';
      Blockly.Msg.WARNING_DELETE_X_BLOCKS = 'Weet u zeker dat u alle %1 van deze blokken wilt verwijderen?';

      // Blocklyeditor.js';
      Blockly.Msg.GENERATE_YAIL = 'Genereer Yail';
      Blockly.Msg.DO_IT = 'Voer uit';
      Blockly.Msg.CLEAR_DO_IT_ERROR = 'Wis Fout';
      Blockly.Msg.CAN_NOT_DO_IT = 'Kan dit niet doen';
      Blockly.Msg.CONNECT_TO_DO_IT = 'U moet verbonden zijn met de Metgezel of emulator om "Doe het" te gebruiken';

      // Clock Component Menu Items';
          Blockly.Msg.TIME_YEARS = 'Years';
          Blockly.Msg.TIME_MONTHS = 'Months';
          Blockly.Msg.TIME_WEEKS = 'Weeks';
          Blockly.Msg.TIME_DAYS = 'Days';
          Blockly.Msg.TIME_HOURS = 'Hours';
          Blockly.Msg.TIME_MINUTES = 'Minutes';
          Blockly.Msg.TIME_SECONDS = 'Seconds';
          Blockly.Msg.TIME_DURATION = 'Duration';

  }
};

// Initalize language definition to English
Blockly.Msg.nl_be.switch_language_to_dutch.init();
