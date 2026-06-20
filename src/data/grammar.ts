/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GrammarSection, QuizQuestion } from '../types';

export const GRAMMAR_SECTIONS: GrammarSection[] = [
  {
    title: 'Genders & Articles (De tre grammatiske kjønnene)',
    summary: 'Norwegian has three grammatical genders: Masculine (hankjønn), Feminine (hunkjønn), and Neuter (intetkjønn). Every noun has a gender, indicated by its indefinite article.',
    level: 'A1',
    explanations: [
      {
        heading: 'Masculine (hankjønn) — Article: "en"',
        text: 'This is the most common gender, accounting for over 60% of all nouns. It uses "en" as its indefinite article (a/an).',
        examples: [
          { norwegian: 'en gutt', english: 'a boy', analysis: '"gutt" is masculine, so it takes "en".' },
          { norwegian: 'en bil', english: 'a car', analysis: '"bil" is masculine, so it takes "en".' }
        ]
      },
      {
        heading: 'Feminine (hunkjønn) — Article: "ei"',
        text: 'Used for some natural feminine items, animals, and traditional words. In standard Bokmål, you can always treat feminine nouns as masculine (using "en"), but using "ei" sounds more natural and native.',
        examples: [
          { norwegian: 'ei jente', english: 'a girl', analysis: 'Traditional feminine. Can also be written "en jente".' },
          { norwegian: 'ei bok', english: 'a book', analysis: 'Traditional feminine. Can also be written "en bok".' }
        ]
      },
      {
        heading: 'Neuter (intetkjønn) — Article: "et"',
        text: 'Used for things that are neither masculine nor feminine, often short or abstract concepts. Must use "et". There is no option to merge with masculine/feminine articles.',
        examples: [
          { norwegian: 'et hus', english: 'a house', analysis: '"hus" is neuter, so it absolutely takes "et".' },
          { norwegian: 'et barn', english: 'a child', analysis: '"barn" is neuter, so it takes "et".' }
        ]
      }
    ]
  },
  {
    title: 'Definite vs Indefinite Nouns (Bestemt og ubestemt form)',
    summary: 'Unlike English, which uses "the" in front of a noun (e.g. "the boy"), Norwegian does not have a separate word for "the". Instead, the article moves to the end of the noun as a suffix!',
    level: 'A1',
    explanations: [
      {
        heading: 'Singular Definite Endings (Entall)',
        text: 'To make a noun definite ("the..."), take the indefinite article (en, ei, et) and attach it directly to the end of the word. If the word ends in a vowel, you adjust accordingly (e.g., dropping extra vowels). For feminine nouns, the ending becomes "-a".',
        examples: [
          { norwegian: 'en gutt → gutten', english: 'a boy → the boy', analysis: 'The article "en" is attached at the end.' },
          { norwegian: 'ei jente → jenta', english: 'a girl → the girl', analysis: 'The ending "-a" replaces the "-e" suffix for feminine definite nouns.' },
          { norwegian: 'et hus → huset', english: 'a house → the house', analysis: 'The article "et" attaches at the end (but the pronounced "t" is silent!).' }
        ]
      }
    ]
  },
  {
    title: 'Present Tense Verbs (Verb i presens)',
    summary: 'Verb conjugation in Norwegian is wonderfully easy compared to English, French, or Spanish. Verbs do NOT change depending on the person or subject! What a relief.',
    level: 'A1',
    explanations: [
      {
        heading: 'The Present Tense Ending: "-r"',
        text: 'To put a verb in the present tense (e.g., "reads", "speaks", "is calling"), you simply take the infinitive form of the verb (which usually ends in a vowel, often "-e") and append an "-r" to the end. The same form is used for I, you, he, she, we, and they!',
        examples: [
          { norwegian: 'å snakke → snakker', english: 'to speak → speak / speaks / speaking', analysis: '"Jeg snakker", "Du snakker", "Vi snakker" are all identical!' },
          { norwegian: 'å spise → spiser', english: 'to eat → eat / eats / eating', analysis: 'Infinitive spise (to eat) + "r" = spiser (eats).' },
          { norwegian: 'å bo → bor', english: 'to live → live / lives / living', analysis: 'Infinitive bo (to live) + "r" = bor (lives).' }
        ]
      },
      {
        heading: 'Exceptions: Irregular Present Verbs',
        text: 'As in any language, there are a few highly common exception verbs that do not follow the "-r" rule. Conjugations remain identical across all subjects.',
        examples: [
          { norwegian: 'å være → er', english: 'to be → am / is / are', analysis: '"å være" (to be) conjugates to "er" in the present tense.' },
          { norwegian: 'å ha → har', english: 'to have → have / has', analysis: '"å ha" (to have) conjugates to "har" in the present tense.' },
          { norwegian: 'å vite → vet', english: 'to know → know / knows', analysis: '"å vite" (to know) conjugates to "vet" in the present tense.' }
        ]
      }
    ]
  },
  {
    title: 'Word Order & The "V2" Rule (Setningsoppbygging og V2-regelen)',
    summary: 'Direct statements normally follow the standard subject-verb-object (SVO) order. However, Norwegian strictly follows the Germanic V2 (Verb Second) Rule, which means the main verb MUST be the second element in the sentence!',
    level: 'A1',
    explanations: [
      {
        heading: 'Standard SVO Order',
        text: 'In standard statements, Norwegian looks just like English. Subject (S) + Verb (V) + Object (O).',
        examples: [
          { norwegian: 'Jeg (S) spiser (V) et eple (O).', english: 'I eat an apple.', analysis: 'Subject "Jeg", Verb "spiser" (V2 position).' }
        ]
      },
      {
        heading: 'The V2 Rule in Inversion',
        text: 'If you start a sentence with anything OTHER than the subject—such as a time phrase, location, or adverb—the verb STILL remains the second element. This forces the subject to jump after the verb (Inversion).',
        examples: [
          { norwegian: 'I dag (Time) spiser (V) jeg (S) et eple (O).', english: 'Today I eat an apple (lit: "Today eat I an apple").', analysis: 'Because "I dag" represents the first element, the verb "spiser" stays second, pushing the subject "jeg" third.' },
          { norwegian: 'Nå (Adverb) bor (V) vi (S) i Oslo.', english: 'Now we live in Oslo (lit: "Now live we in Oslo").', analysis: '"Nå" is first, "bor" is second (verb), "vi" is third (subject).' }
        ]
      }
    ]
  },
  // --- A2 CONTENT START ---
  {
    title: 'Past Tense & Present Perfect (Preteritum og presens perfektum)',
    summary: 'The choice between Preteritum (Past Simple) and Presens Perfektum (Present Perfect) is based on timing. Preteritum is used for finished actions at a specific time in the past. Presens Perfektum (har + participle) is used when the past time is unspecified or when the action has dynamic relevance to the present.',
    level: 'A2',
    explanations: [
      {
        heading: 'Regular Past Tense Group Rules',
        text: 'Weak verbs conjugate into past tense (preteritum) in 4 groups: Group 1 (-et/et), Group 2 (-te/t), Group 3 (-de/d), and Group 4 (-dde/dd). Present perfect uses "har" followed by the perfect participle form of the verb.',
        examples: [
          { norwegian: 'å snakke → snakket → har snakket', english: 'to talk → talked → have talked', analysis: 'Group 1 (-et): Base ends in double consonant. Most common.' },
          { norwegian: 'å like → likte → har likt', english: 'to like → liked → have liked', analysis: 'Group 2 (-te): Base ends in voiceless consonant (k, p, t, s).' },
          { norwegian: 'å leve → levde → har levd', english: 'to live (exist) → lived → have lived', analysis: 'Group 3 (-de): Base ends in v, j, g, or diphthongs.' },
          { norwegian: 'å bo → bodde → har bodd', english: 'to live (reside) → lived → have lived', analysis: 'Group 4 (-dde): Base ends in a stressed vowel.' }
        ]
      },
      {
        heading: '10+ Irregular Strong Verbs (Sterke verb)',
        text: 'Strong verbs do not take regular suffix endings. Instead, they shift vowels in the past simple and have special short forms. Study these 11 essential strong verbs:',
        examples: [
          { norwegian: 'å være → var → har vært', english: 'to be → was/were → have been', analysis: 'Highly irregular verb.' },
          { norwegian: 'å ha → hadde → har hatt', english: 'to have → had → have had', analysis: 'Extremely frequent supporting verb.' },
          { norwegian: 'å gjøre → gjorde → har gjort', english: 'to do → did → have done', analysis: 'Conjugates with a consonant change.' },
          { norwegian: 'å gå → gikk → har gått', english: 'to go / walk → went → have gone', analysis: 'Double consonant structure in preteritum.' },
          { norwegian: 'å se → så → har sett', english: 'to see/watch → saw → have seen', analysis: 'Vowel shifts to -å-, participle becomes "sett".' },
          { norwegian: 'å skrive → skrev → har skrevet', english: 'to write → wrote → have written', analysis: 'Vowel shift i → e → e.' },
          { norwegian: 'å ta → tok → har tatt', english: 'to take → took → have taken', analysis: 'Vowel shift a → o → a.' },
          { norwegian: 'å komme → kom → har kommet', english: 'to come → came → have come', analysis: 'Short vowel in preteritum.' },
          { norwegian: 'å finne → fant → har funnet', english: 'to find → found → have found', analysis: 'Vowel shift i → a → u.' },
          { norwegian: 'å få → fikk → har fått', english: 'to get/receive → got → have got', analysis: 'Vowel shift å → i → å.' },
          { norwegian: 'å si → sa → har sagt', english: 'to say → said → have said', analysis: 'Participle pronounced with a hard [t] sound: [sakt].' }
        ]
      }
    ]
  },
  {
    title: 'Comparative & Superlative Adjectives (Adjektiv: Komparasjon)',
    summary: 'In Norwegian, adjectives must agree in gender and number with the noun they describe. However, when comparing objects, we use comparative and superlative degrees, which are mostly formed with suffixes or irregular modifications.',
    level: 'A2',
    explanations: [
      {
        heading: 'Regular Adjective Comparison (-ere, -est)',
        text: 'Most regular adjectives form the comparative by adding "-ere" and the superlative by adding "-est". No changes are made based on gender/number in comparative forms!',
        examples: [
          { norwegian: 'billig → billigere → billigst', english: 'cheap → cheaper → cheapest', analysis: 'Regular suffix endings.' },
          { norwegian: 'varm → varmere → varmest', english: 'warm → warmer → warmest', analysis: 'Applied directly to the short descriptor.' }
        ]
      },
      {
        heading: '10+ Essential Irregular Adjectives',
        text: 'Several of the most common adjectives undergo vowel mutations or complete stem shifts in comparisons. These are crucial to memorize:',
        examples: [
          { norwegian: 'god → bedre → best', english: 'good → better → best', analysis: 'Complete word/root shift.' },
          { norwegian: 'dårlig → verre → verst', english: 'bad → worse → worst', analysis: 'Shift of base word.' },
          { norwegian: 'gammel → eldre → eldst', english: 'old → older → oldest', analysis: 'Vowel changes from a to e.' },
          { norwegian: 'ung → yngre → yngst', english: 'young → younger → youngest', analysis: 'Vowel mutations u to y.' },
          { norwegian: 'stor → større → størst', english: 'big → bigger → biggest', analysis: 'Vowel changes o to ø with consonant double.' },
          { norwegian: 'liten → mindre → minst', english: 'small → smaller → smallest', analysis: 'Changes completely; "liten" agrees with gender additionally in positive.' },
          { norwegian: 'lang → lengre → lengst', english: 'long → longer → longest', analysis: 'Vowel shift a to e.' },
          { norwegian: 'tung → tyngre → tyngst', english: 'heavy → heavier → heaviest', analysis: 'Vowel shift u to y.' },
          { norwegian: 'mange → flere → flest', english: 'many → more → most', analysis: 'Used for countable items.' },
          { norwegian: 'mye → mer → mest', english: 'much → more → most', analysis: 'Used for uncountable quantities.' },
          { norwegian: 'pen → penere → penest', english: 'pretty → prettier → prettiest', analysis: 'Regular format but very common.' }
        ]
      }
    ]
  },
  {
    title: 'Prepositions of Place and Time (Preposisjoner: Sted og tid)',
    summary: 'Prepositions can be tricky because their use rarely aligns 1:1 with English. They help place events, locations, and schedules in concrete physical or temporal structures.',
    level: 'A2',
    explanations: [
      {
        heading: 'Prepositions of Place (10 examples)',
        text: 'The distinction between "i" (inside/country/city) and "på" (on/institutions/islands/open lands) is fundamental in Norwegian geography, alongside other location prepositions.',
        examples: [
          { norwegian: 'i', english: 'in (Jeg bor i Norge. / Flasken er i veska.)', analysis: 'Used with countries, cities, and three-dimensional spaces.' },
          { norwegian: 'på', english: 'on / at (Jeg er på biblioteket. / Boka ligger på bordet.)', analysis: 'Used with open top surfaces, islands, and administrative buildings/workplaces.' },
          { norwegian: 'til', english: 'to / toward (Jeg reiser til Oslo.)', analysis: 'Indicates movement towards a destination.' },
          { norwegian: 'fra', english: 'from (Hun kommer fra Bergen.)', analysis: 'Indicates origin.' },
          { norwegian: 'under', english: 'under / beneath (Katten sitter under stolen.)', analysis: 'Indicates vertical position underneath.' },
          { norwegian: 'over', english: 'over / above (Lampen henger over senga.)', analysis: 'Indicates position higher up.' },
          { norwegian: 'bak', english: 'behind (Bilen står bak huset.)', analysis: 'Position to the rear.' },
          { norwegian: 'foran', english: 'in front of (Stopp foran butikken.)', analysis: 'Position to the front.' },
          { norwegian: 'ved', english: 'by / near (Vi møtes ved stasjonen.)', analysis: 'Close proximity.' },
          { norwegian: 'ved siden av', english: 'next to (Sitt ved siden av meg.)', analysis: 'Directly alongside.' }
        ]
      },
      {
        heading: 'Prepositions of Time (6+ examples with sentences)',
        text: 'Time expressions require precise choices. Memorize these specific prepositions for duration, frequency, past, and future events.',
        examples: [
          { norwegian: 'i (duration)', english: 'for [duration] (Jeg har bodd her i fem år.)', analysis: 'Indicates span of time for ongoing or completed actions.' },
          { norwegian: 'på (negative time span)', english: 'for [duration in negative statement] (Jeg har ikke røykt på ti år.)', analysis: 'Used in negative sentences to state how long something has NOT happened.' },
          { norwegian: 'om (future time)', english: 'in [future time] (Filmen begynner om ti minutter.)', analysis: 'States when a future event will happen relative to now.' },
          { norwegian: 'for ... siden (past ago)', english: '... ago (Jeg flyttet hit for to år siden.)', analysis: '"for" + [amount] + "siden" means "[amount] ago".' },
          { norwegian: 'på (days / seasons)', english: 'on [days] (Hva gjør du på lørdager?)', analysis: '"på" + plural day indicates recurring schedules.' },
          { norwegian: 'i (current seasons / year)', english: 'this [season] (Det snør mye i vinter.)', analysis: '"i" + singular season often refers to current/upcoming seasons.' }
        ]
      }
    ]
  },
  {
    title: 'Reflexive Verbs & Pronouns (Refleksive verb)',
    summary: 'Reflexive verbs form actions that the subject performs upon itself. They require corresponding reflexive pronouns that change based on the grammatical subject.',
    level: 'A2',
    explanations: [
      {
        heading: 'Reflexive Pronoun Table',
        text: 'The reflexive pronoun changes for each pronoun, matching English "myself", "yourself", or "themself", except that Norwegian uses "seg" for all third-person singular and plural subjects.',
        examples: [
          { norwegian: 'Jeg vasker meg', english: 'I wash myself', analysis: '"meg" pairs with "jeg".' },
          { norwegian: 'Du vasker deg', english: 'You wash yourself', analysis: '"deg" pairs with "du" (singular).' },
          { norwegian: 'Han / Hun / Det vasker seg', english: 'He / She / It washes itself', analysis: '"seg" is used for all third person.' },
          { norwegian: 'Vi vasker oss', english: 'We wash ourselves', analysis: '"oss" pairs with "vi".' },
          { norwegian: 'Dere vasker dere', english: 'You (plural) wash yourselves', analysis: '"dere" pairs with "dere".' },
          { norwegian: 'De vasker seg', english: 'They wash themselves', analysis: '"seg" pairs with "de" (third-person plural).' }
        ]
      },
      {
        heading: 'Common Reflexive Verbs in Daily Routine',
        text: 'Many common emotional states or actions are reflexive in Norwegian but not in English (e.g. to look forward to, to make up one\'s mind).',
        examples: [
          { norwegian: 'å grue seg (til)', english: 'to dread / worry (about)', analysis: 'E.g., "Jeg gruer meg til eksamen."' },
          { norwegian: 'å glede seg (til)', english: 'to look forward (to)', analysis: 'E.g., "Vi gleder oss til ferien!"' },
          { norwegian: 'å barbere seg', english: 'to shave oneself', analysis: 'E.g., "Han barberer seg hver morgen."' },
          { norwegian: 'å bestemme seg', english: 'to make up one\'s mind / decide', analysis: 'E.g., "Du må bestemme deg nå."' },
          { norwegian: 'å kjede seg', english: 'to be bored', analysis: 'E.g., "Barna kjeder seg hjemme."' }
        ]
      }
    ]
  },
  // --- B1 CONTENT START ---
  {
    title: 'Subordinate Clauses & Word Order (Leddsetninger og konjunksjoner)',
    summary: 'A subclause (leddsetning) is a clause that cannot stand alone as a full sentence. Subordinate clauses have a fundamental word order shift: sentence adverbs like "ikke" (not) or "aldri" (never) MUST go BEFORE the conjugated verb!',
    level: 'B1',
    explanations: [
      {
        heading: 'Subordinate Conjunctions (Subjunksjoner)',
        text: 'These words introduce subordinate clauses. Common ones include "fordi" (because), "selv om" (even though), "hvis" (if), "at" (that), and "mens" (while).',
        examples: [
          { norwegian: 'fordi', english: 'because (Hun ble hjemme fordi hun var syk.)', analysis: 'Introduces the cause of the main clause.' },
          { norwegian: 'selv om', english: 'even though / although (Jeg går ut selv om det regner.)', analysis: 'Concedes a contrasting condition.' },
          { norwegian: 'hvis', english: 'if / in case (Hvis du kommer, kan vi lage mat.)', analysis: 'Conditional subclause starter.' }
        ]
      },
      {
        heading: 'The Sentence Adverb "ikke/aldri" Subclause Shift',
        text: 'Compare main clauses where the verb must be second and "ikke" goes *after* the verb, with subclauses where "ikke" or "aldri" goes *before* the verb! Short rule: "S + A + V" (Subject + Adverb + Verb) inside subclauses.',
        examples: [
          { norwegian: 'Main: Hun spiser ikke kjøtt.', english: 'She does not eat meat.', analysis: 'Main clause: Verb "spiser" is 2nd, "ikke" goes after.' },
          { norwegian: 'Subclause: ... fordi hun ikke spiser kjøtt.', english: '... because she does not eat meat.', analysis: 'Subclause: Subject "hun" + Adverb "ikke" + Verb "spiser". Notice "ikke" comes first!' },
          { norwegian: 'Main: Han reiser aldri til utlandet.', english: 'He never travels abroad.', analysis: 'Main clause: Verb "reiser" is 2nd, adverb "aldri" follows.' },
          { norwegian: 'Subclause: ... selv om han aldri reiser til utlandet.', english: '... even though he never travels abroad.', analysis: 'Subclause: Conjunction "selv om" + Subject "han" + Adverb "aldri" + Verb "reiser".' }
        ]
      }
    ]
  },
  {
    title: 'Conditional Sentences (Kondisjonale setninger)',
    summary: 'Conditional statements describe conditions that may or may not happen. We separate real conditionals (likely situations in present/future) from counterfactual / hypothetical conditionals (what would have happened).',
    level: 'B1',
    explanations: [
      {
        heading: 'Real / Feasible Conditionals (Oppfyllbare betingelser)',
        text: 'For real situations, we use "hvis" in the present tense, and the main clause uses present tense or modal verbs.',
        examples: [
          { norwegian: 'Hvis det blir sol på søndag, vil vi gå på tur.', english: 'If it is sunny on Sunday, we will go for a hike.', analysis: 'Likely and feasible conditional future plan.' },
          { norwegian: 'Hvis du har tid, kan du hjelpe meg?', english: 'If you have time, can you help me?', analysis: 'Direct requests under real-time conditions.' }
        ]
      },
      {
        heading: 'Hypothetical / Unreal Conditionals (Hypotetiske betingelser)',
        text: 'For imaginary or unreal situations in the present or past, we shift tenses backwards. We use past tense (preteritum) in the subclause, and "ville + infinitive" (would) in the main clause.',
        examples: [
          { norwegian: 'Hvis jeg hadde mye penger, ville jeg kjøpt et stort hus.', english: 'If I had a lot of money, I would buy a big house.', analysis: 'Hypothetical present: "hadde" (past simple) in subclause; "ville + kjøpt" (or ville kjøpe) in main.' },
          { norwegian: 'Hvis vi hadde dratt tidligere, ville vi ikke ha mistet toget.', english: 'If we had left earlier, we would not have missed the train.', analysis: 'Unreal past: imagining a finished past event differently.' }
        ]
      }
    ]
  },
  {
    title: 'Passive Voice (Passiv form: "bli-passiv" vs "s-passiv")',
    summary: 'The passive voice shifts focus from the actor to the action or object receiving the action. Norwegian has two distinct passive forms: "bli-passiv" (using verb å bli) and "s-passiv" (verbs ending in -s).',
    level: 'B1',
    explanations: [
      {
        heading: 'The Dynamic Bli-Passive',
        text: 'Formed with "bli" (in any tense) + the perfect participle of the main verb. Extremely common for actual, specific events occurring at a point in time.',
        examples: [
          { norwegian: 'Bilen blir vasket av faren min.', english: 'The car is being washed by my father.', analysis: 'Present bli-passive: "blir" + participle "vasket".' },
          { norwegian: 'Huset ble bygget i 1990.', english: 'The house was built in 1990.', analysis: 'Past bli-passive: "ble" + participle "bygget".' }
        ]
      },
      {
        heading: 'The Static S-Passive',
        text: 'Formed by adding "-s" to the infinitive of the verb. It is primarily used with modal verbs (kan, må, bør), in recipes, instruction booklets, headlines, and general legal laws/regulations.',
        examples: [
          { norwegian: 'Det må gjøres med en gang.', english: 'It must be done immediately.', analysis: 'Modal verb + S-passive: "må" + "gjøres" (å gjøre + s).' },
          { norwegian: 'Melken må rystes før bruk.', english: 'The milk must be shaken before use.', analysis: 'Someday instruction or labeling: "rystes" (to shake + s).' },
          { norwegian: 'Boka kan kjøpes i butikken.', english: 'The book can be bought in the store.', analysis: '"kan" (can) + "kjøpes" (be bought).' }
        ]
      }
    ]
  },
  {
    title: 'Indirect Speech (Indirekte tale og tidsforskyving)',
    summary: 'Indirect speech reports what someone else said without quoting them word-for-word. This structure turns quoted direct thoughts into subordinate clauses, triggering tense shifts and pronoun adjustments.',
    level: 'B1',
    explanations: [
      {
        heading: 'Tense Backshifting Rule (Tidsforskyvning)',
        text: 'If the reporting verb is in the past ("sa" - said, "spurte" - asked, "trodde" - thought), the verbs in the reported speech must step backward in time (present shifts to past, past shifts to past perfect).',
        examples: [
          { norwegian: 'Direct: "Jeg bor i Bergen," sa Jonas.', english: '"I live in Bergen," said Jonas.', analysis: 'Present tense reported statement.' },
          { norwegian: 'Indirect: Jonas sa at han bodde i Bergen.', english: 'Jonas said that he lived in Bergen.', analysis: '"bor" (present) shifts to "bodde" (past) because Jonas spoke in the past ("sa"). "Jeg" changes to "han".' },
          { norwegian: 'Direct: "Vi har spist frokost," sa de.', english: '"We have eaten breakfast," they said.', analysis: 'Present perfect statement.' },
          { norwegian: 'Indirect: De sa at de hadde spist frokost.', english: 'They said that they had eaten breakfast.', analysis: '"har spist" shifts to "hadde spist" (past perfect).' }
        ]
      },
      {
        heading: 'Asking Questions (med "om")',
        text: 'When reporting questions that do not have a question word (Yes/No questions), we introduce the subclause using the conjunction "om" (if / whether).',
        examples: [
          { norwegian: 'Direct: "Er du sulten?" spurte hun.', english: '"Are you hungry?" she asked.', analysis: 'Direct Yes/No question.' },
          { norwegian: 'Indirect: Hun spurte om jeg var sulten.', english: 'She asked if (whether) I was hungry.', analysis: 'Introduced with "om". Present "er" shifts to past "var".' }
        ]
      }
    ]
  }
];

export const MINI_QUIZ_GRAMMAR: QuizQuestion[] = [
  {
    id: 'grammar_1',
    question: 'How do you say "the house" given that "a house" is "et hus"?',
    type: 'multiple-choice',
    options: ['en huset', 'huset', 'hust', 'et husen'],
    correctAnswer: 'huset',
    explanation: 'For neuter nouns ("et"-genders), the definite singular form is built by attaching the article to the end as a suffix: "hus" + "et" = "huset".'
  },
  {
    id: 'grammar_2',
    question: 'Conjugate the verb "å snakke" (to speak) in the present tense for the pronoun "Vi" (we).',
    type: 'multiple-choice',
    options: ['snakke', 'snakket', 'snakkere', 'snakker'],
    correctAnswer: 'snakker',
    explanation: 'Verbs do not change in present tense depending on the pronoun. To form the present tense, add "-r" to the infinitive form to get "snakker" for all pronouns ("jeg snakker", "vi snakker").'
  },
  {
    id: 'grammar_3',
    question: 'According to the V2 rule, which sentence correctly translates "Today we live in Norway"?',
    type: 'multiple-choice',
    options: ['I dag vi bor i Norge.', 'I dag bor vi i Norge.', 'Vi bor i dag i Norge.', 'I dag bor i Norge vi.'],
    correctAnswer: 'I dag bor vi i Norge.',
    explanation: 'The Germanic V2 rule mandates that the verb must be the second syntactic element. "I dag" is the first element, "bor" (verb) is the second element, forcing the subject "vi" to the third position.'
  },
  // --- A2 GRAMMAR QUESTIONS ---
  {
    id: 'grammar_4_a2',
    question: 'Translate the past tense statement: "We saw Jonas yesterday." (å se - saw - seen)',
    type: 'multiple-choice',
    options: ['Vi se Jonas i går.', 'Vi har sett Jonas i går.', 'Vi så Jonas i går.', 'Vi sjå Jonas i går.'],
    correctAnswer: 'Vi så Jonas i går.',
    explanation: '"å se" is strong and irregular. Its past simple form (preteritum) is "så", which is used when talking about a specific past moment ("i går" = yesterday).'
  },
  {
    id: 'grammar_5_a2',
    question: 'Select the correct comparative chain for the irregular adjective "gammel" (old):',
    type: 'multiple-choice',
    options: ['gammel - gamlere - gamlest', 'gammel - eldre - eldst', 'gammel - eldre - eldre', 'gammel - mer gammel - mest gammel'],
    correctAnswer: 'gammel - eldre - eldst',
    explanation: '"gammel" is highly irregular. It changes its root vowel to "e" and drops the stem ending, becoming "eldre" (older) and "eldst" (oldest).'
  },
  {
    id: 'grammar_6_a2',
    question: 'Choose the correct reflexive pronoun to complete: "Hun gleder _____ til ferien."',
    type: 'multiple-choice',
    options: ['meg', 'deg', 'seg', 'oss'],
    correctAnswer: 'seg',
    explanation: 'Third person reflexive verbs (for han, hun, de, det) always use the pronoun "seg" as their reflexive indicator.'
  },
  {
    id: 'grammar_7_a2',
    question: 'Which preposition is used for "duration of time" in: "Jeg har bodd i Oslo _____ tre år"?',
    type: 'multiple-choice',
    options: ['på', 'i', 'for', 'om'],
    correctAnswer: 'i',
    explanation: 'To express standard duration of an ongoing or completed state in positive sentences, we use "i" ("i tre år" = for three years).'
  },
  // --- B1 GRAMMAR QUESTIONS ---
  {
    id: 'grammar_8_b1',
    question: 'Where does the word "ikke" go in this B1 subordinate clause: "Jeg er sliten fordi jeg _____ sover _____."',
    type: 'multiple-choice',
    options: [
      'fordi jeg ikke sover (before the verb)',
      'fordi jeg sover ikke (after the verb)',
      'fordi ikke jeg sover (before the pronoun)',
      'fordi jeg sover ikke noensinne'
    ],
    correctAnswer: 'fordi jeg ikke sover (before the verb)',
    explanation: 'In Norwegian subordinate clauses, sentence adverbs like "ikke" or "aldri" must precede the conjugated verb. This is known as the "S-A-V" structure (Subject "jeg" + Adverb "ikke" + Verb "sover").'
  },
  {
    id: 'grammar_9_b1',
    question: 'Which sentence correctly expresses a counterfactual / hypothetical conditional in B1 Norwegian?',
    type: 'multiple-choice',
    options: [
      'Hvis jeg har penger, kan jeg kjøpe en bil.',
      'Hvis jeg hadde penger, ville jeg kjøpt en bil.',
      'Hvis jeg ha penger, kjøper jeg en bil.',
      'Hvis jeg bodd i Norge, har jeg lært norsk.'
    ],
    correctAnswer: 'Hvis jeg hadde penger, ville jeg kjøpt en bil.',
    explanation: 'For hypothetical conditionals, Norwegian backshifts tenses: past tense "hadde" in the "hvis"-subclause, and "ville" + participle/infinitive in the main clause ("ville jeg kjøpt").'
  },
  {
    id: 'grammar_10_b1',
    question: 'Which passive voice form is suited for formal instructions, recipes, or rules like "The milk must be shaken before use"?',
    type: 'multiple-choice',
    options: ['Bli-passive (Melken blir rystet)', 'S-passive (Melken må rystes)', 'Standard active (Du ryster melken)', 'Direct imperative (Ryst melken!)'],
    correctAnswer: 'S-passive (Melken må rystes)',
    explanation: 'The static S-passive is constructed by appending "-s" to the infinitive (å ryste → rystes) and is the standard form for rules, instructions, recipes, and modals.'
  }
];
