const scaleOptionSelector = document.querySelector('.main__option--scale');
const chordOptionSelector = document.querySelector('.main__option--chord');
const chordName = document.querySelector('#main__canvas--chord');
const chords = Array.from(document.querySelectorAll('#main__canvas--chord > span'));

const keys = [
    {
        major: {
            name: 'C',
            keySignature: {
                scale: {
                    natural: 'CDEFGABc',
                    harmonic: 'CDEFGABc', // dummy
                },
                chord: {
                    triad: "[CEG][DFA][EGB][FAc][GBd][Ace][Bdf][ceg]",
                    triadChord: ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'B<sup>o</sup>', 'C'],
                    seventh: "[CEGB][DFAc][EGBd][FAce][GBdf][Aceg][Bdfa][cegb]",
                    seventhChord: ['CΔ7', 'Dm7', 'Em7', 'FΔ7', 'G7', 'Am7', 'B<sup>ø</sup>7', 'CΔ7'],
                },
            },
            accidental: {
                scale: {
                    natural: 'CDEFGABc',
                    harmonic: 'CDEFGABc', // dummy
                },
                chord: {
                    triad: "[CEG][DFA][EGB][FAc][GBd][Ace][Bdf][ceg]",
                    triadChord: ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'B<sup>o</sup>', 'C'],
                    seventh: "[CEGB][DFAc][EGBd][FAce][GBdf][Aceg][Bdfa][cegb]",
                    seventhChord: ['CΔ7', 'Dm7', 'Em7', 'FΔ7', 'G7', 'Am7', 'B<sup>ø</sup>7', 'CΔ7'],
                },
            },
        },
        minor: {
            name: 'Am',
            keySignature: {
                scale: {
                    natural: 'A,B,CDEFGA',
                    harmonic: 'A,B,CDEF^GA',
                },
                chord: {
                    triad: "[A,CE][B,DF][CE^G][DFA][E^GB][FAc][^GBd][Ace]",
                    triadChord: ['Am', 'B<sup>o</sup>', 'C+', 'Dm', 'E', 'F', 'G#<sup>o</sup>', 'Am'],
                    seventh: "[A,CE][B,DF][CE^G][DFA][E^GB][FAc][^GBd][Ace]", // dummy
                    seventhChord: ['Am', 'B<sup>o</sup>', 'C+', 'Dm', 'E', 'F', 'G#<sup>o</sup>', 'Am'], // dummy
                },
            },
            accidental: {
                scale: {
                    natural: 'A,B,CDEFGA',
                    harmonic: 'A,B,CDEF^GA',
                },
                chord: {
                    triad: "[A,CE][B,DF][CE^G][DFA][E^GB][FAc][^GBd][Ace]",
                    triadChord: ['Am', 'B<sup>o</sup>', 'C+', 'Dm', 'E', 'F', 'G#<sup>o</sup>', 'Am'],
                    seventh: "[A,CE][B,DF][CE^G][DFA][E^GB][FAc][^GBd][Ace]", // dummy
                    seventhChord: ['Am', 'B<sup>o</sup>', 'C+', 'Dm', 'E', 'F', 'G#<sup>o</sup>', 'Am'], // dummy
                },
            },
        },
    },
    {
        major: {
            name: 'G',
            keySignature: {
                scale: {
                    natural: 'GABcdefg',
                    harmonic: 'GABcdefg', // dummy
                },
                chord: {
                    triad: "[GBd][Ace][Bdf][ceg][dfa][egb][fac'][gbd']",
                    triadChord: ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#<sup>o</sup>', 'G'],
                    seventh: "[GBdf][Aceg][Bdfa][cegb][dfac'][egbd'][fac'e'][gbd'f']",
                    seventhChord: ['GΔ7', 'Am7', 'Bm7', 'CΔ7', 'D7', 'Em7', 'F#<sup>ø</sup>7', 'GΔ7'],
                },
            },
            accidental: {
                scale: {
                    natural: 'GABcde^fg',
                    harmonic: 'GABcde^fg', // dummy
                },
                chord: {
                    triad: "[GBd][Ace][Bd^f][ceg][d^fa][egb][^fac'][gbd']",
                    triadChord: ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#<sup>o</sup>', 'G'],
                    seventh: "[GBd^f][Aceg][Bd^fa][cegb][d^fac'][egbd'][^fac'e'][gbd'^f']",
                    seventhChord: ['GΔ7', 'Am7', 'Bm7', 'CΔ7', 'D7', 'Em7', 'F#<sup>ø</sup>7', 'GΔ7'],
                },
            },
        },
        minor: {
            name: 'Em',
            keySignature: {
                scale: {
                    natural: 'EFGABcde',
                    harmonic: 'EFGABc^de',
                },
                chord: {
                    triad: "[EGB][FAc][GB^d][Ace][B^df][ceg][^dfa][egb]",
                    triadChord: ['Em', 'F#<sup>o</sup>', 'G+', 'Am', 'B', 'C', 'D#<sup>o</sup>', 'Em'],
                    seventh: "[EGB][FAc][GB^d][Ace][B^df][ceg][^dfa][egb]", // dummy
                    seventhChord: ['Em', 'F#<sup>o</sup>', 'G+', 'Am', 'B', 'C', 'D#<sup>o</sup>', 'Em'], // dummy
                },
            },
            accidental: {
                scale: {
                    natural: 'E^FGABcde',
                    harmonic: 'E^FGABc^de',
                },
                chord: {
                    triad: "[EGB][^FAc][GB^d][Ace][B^d^f][ceg][^d^fa][egb]",
                    triadChord: ['Em', 'F#<sup>o</sup>', 'G+', 'Am', 'B', 'C', 'D#<sup>o</sup>', 'Em'],
                    seventh: "[EGB][^FAc][GB^d][Ace][B^d^f][ceg][^d^fa][egb]", // dummy
                    seventhChord: ['Em', 'F#<sup>o</sup>', 'G+', 'Am', 'B', 'C', 'D#<sup>o</sup>', 'Em'], // dummy
                },
            },
        },
    },
    {
        major: {
            name: 'D',
            keySignature: {
                scale: {
                    natural: 'DEFGABcd',
                    harmonic: 'DEFGABcd', // dummy
                },
                chord: {
                    triad: "[DFA][EGB][FAc][GBd][Ace][Bdf][ceg][dfa]",
                    triadChord: ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#<sup>o</sup>', 'D'],
                    seventh: "[DFAc][EGBd][FAce][GBdf][Aceg][Bdfa][cegb][dfac']",
                    seventhChord: ['DΔ7', 'Em7', 'F#m7', 'GΔ7', 'A7', 'Bm7', 'C#<sup>ø</sup>7', 'DΔ7'],
                },
            },
            accidental: {
                scale: {
                    natural: 'DE^FGAB^cd',
                    harmonic: 'DE^FGAB^cd', // dummy
                },
                chord: {
                    triad: "[D^FA][EGB][^FA^c][GBd][A^ce][Bd^f][^ceg][d^fa]",
                    triadChord: ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#<sup>o</sup>', 'D'],
                    seventh: "[D^FA^c][EGBd][^FA^ce][GBdf][A^ceg][Bd^fa][^cegb][d^fa^c']",
                    seventhChord: ['DΔ7', 'Em7', 'F#m7', 'GΔ7', 'A7', 'Bm7', 'C#<sup>ø</sup>7', 'DΔ7'],
                },
            },
        },
        minor: {
            name: 'Bm',
            keySignature: {
                scale: {
                    natural: 'B,CDEFGAB',
                    harmonic: 'B,CDEFG^AB',
                },
                chord: {
                    triad: "[B,DF][CEG][DF^A][EGB][F^Ac][GBd][^Ace][Bdf]",
                    triadChord: ['Bm', 'C#<sup>o</sup>', 'D+', 'Em', 'F#', 'G', 'A#<sup>o</sup>', 'Bm'],
                    seventh: "[B,DF][CEG][DF^A][EGB][F^Ac][GBd][^Ace][Bdf]", // dummy
                    seventhChord: ['Bm', 'C#<sup>o</sup>', 'D+', 'Em', 'F#', 'G', 'A#<sup>o</sup>', 'Bm'], // dummy
                },
            },
            accidental: {
                scale: {
                    natural: 'B,^CDE^FGAB',
                    harmonic: 'B,^CDE^FG^AB',
                },
                chord: {
                    triad: "[B,D^F][^CEG][D^F^A][EGB][^F^A^c][GBd][^A^ce][Bd^f]",
                    triadChord: ['Bm', 'C#<sup>o</sup>', 'D+', 'Em', 'F#', 'G', 'A#<sup>o</sup>', 'Bm'],
                    seventh: "[B,D^F][^CEG][D^F^A][EGB][^F^A^c][GBd][^A^ce][Bd^f]", // dummy
                    seventhChord: ['Bm', 'C#<sup>o</sup>', 'D+', 'Em', 'F#', 'G', 'A#<sup>o</sup>', 'Bm'], // dummy
                },
            },
        },
    },
    {
        major: {
            name: 'A',
            keySignature: {
                scale: {
                    natural: 'A,B,CDEFGA',
                    harmonic: 'A,B,CDEFGA', // dummy
                },
                chord: {
                    triad: "[A,CE][B,DF][CEG][DFA][EGB][FAc][GBd][Ace]",
                    triadChord: ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#<sup>o</sup>', 'A'],
                    seventh: "[A,CEG][B,DFA][CEGB][DFAc][EGBd][FAce][GBdf][Aceg]",
                    seventhChord: ['AΔ7', 'Bm7', 'C#m7', 'DΔ7', 'E7', 'F#m7', 'G#<sup>ø</sup>7', 'AΔ7'],
                },
            },
            accidental: {
                scale: {
                    natural: 'A,B,^CDE^F^GA',
                    harmonic: 'A,B,^CDE^F^GA', // dummy
                },
                chord: {
                    triad: "[A,^CE][B,D^F][^CE^G][D^FA][E^GB][^FA^c][^GBd][A^ce]",
                    triadChord: ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#<sup>o</sup>', 'A'],
                    seventh: "[A,^CE^G][B,D^FA][^CE^GB][D^FA^c][E^GBd][^FA^ce][^GBdf][A^ceg]",
                    seventhChord: ['AΔ7', 'Bm7', 'C#m7', 'DΔ7', 'E7', 'F#m7', 'G#<sup>ø</sup>7', 'AΔ7'],
                },
            },
        },
        minor: {
            name: 'F#m',
            keySignature: {
                scale: {
                    natural: 'FGABcdef',
                    harmonic: 'FGABcd^ef',
                },
                chord: {
                    triad: "[FAc][GBd][Ac^e][Bdf][c^eg][dfa][^egb][fac']",
                    triadChord: ['F#m', 'G#<sup>o</sup>', 'A+', 'Bm', 'C#', 'D', 'E#<sup>o</sup>', 'F#m'],
                    seventh: "[FAc][GBd][Ac^e][Bdf][c^eg][dfa][^egb][fac']", // dummy
                    seventhChord: ['F#m', 'G#<sup>o</sup>', 'A+', 'Bm', 'C#', 'D', 'E#<sup>o</sup>', 'F#m'], // dummy
                },
            },
            accidental: {
                scale: {
                    natural: '^F^GAB^cdef',
                    harmonic: '^F^GAB^cd^ef',
                },
                chord: {
                    triad: "[^FA^c][^GBd][A^c^e][Bd^f][^c^e^g][d^fa][^e^gb][^fa^c']",
                    triadChord: ['F#m', 'G#<sup>o</sup>', 'A+', 'Bm', 'C#', 'D', 'E#<sup>o</sup>', 'F#m'],
                    seventh: "[^FA^c][^GBd][A^c^e][Bd^f][^c^e^g][d^fa][^e^gb][^fa^c']", // dummy
                    seventhChord: ['F#m', 'G#<sup>o</sup>', 'A+', 'Bm', 'C#', 'D', 'E#<sup>o</sup>', 'F#m'], // dummy
                },
            },
        },
    },
    {
        major: {
            name: 'E',
            keySignature: {
                scale: {
                    natural: 'EFGABcde',
                    harmonic: 'EFGABcde', // dummy
                },
                chord: {
                    triad: "[EGB][FAc][GBd][Ace][Bdf][ceg][dfa][egb]",
                    triadChord: ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#<sup>o</sup>', 'E'],
                    seventh: "[EGBd][FAce][GBdf][Aceg][Bdfa][cegb][dfac'][egbd']",
                    seventhChord: ['EΔ7', 'F#m7', 'G#m7', 'AΔ7', 'B7', 'C#m7', 'D#<sup>ø</sup>7', 'EΔ7'],
                },
            },
            accidental: {
                scale: {
                    natural: 'E^F^GAB^c^de',
                    harmonic: 'E^F^GAB^c^de', // dummy
                },
                chord: {
                    triad: "[E^GB][^FA^c][^GB^d][A^ce][B^d^f][^ce^g][^d^fa][e^gb]",
                    triadChord: ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#<sup>o</sup>', 'E'],
                    seventh: "[E^GB^d][^FA^ce][^GB^d^f][A^ce^g][B^d^fa][^ce^gb][^d^fa^c'][e^gb^d']",
                    seventhChord: ['EΔ7', 'F#m7', 'G#m7', 'AΔ7', 'B7', 'C#m7', 'D#<sup>ø</sup>7', 'EΔ7'],
                },
            },
        },
        minor: {
            name: 'C#m',
            keySignature: {
                scale: {
                    natural: 'CDEFGABc',
                    harmonic: 'CDEFGA^Bc',
                },
                chord: {
                    triad: "[CEG][DFA][EG^B][FAc][G^Bd][Ace][^Bdf][ceg]",
                    triadChord: ['C#m', 'D#<sup>o</sup>', 'E+', 'F#m', 'G#', 'A', 'B#<sup>o</sup>', 'C#m'],
                    seventh: "[CEG][DFA][EG^B][FAc][G^Bd][Ace][^Bdf][ceg]", // dummy
                    seventhChord: ['C#m', 'D#<sup>o</sup>', 'E+', 'F#m', 'G#', 'A', 'B#<sup>o</sup>', 'C#m'], // dummy
                },
            },
            accidental: {
                scale: {
                    natural: '^C^DE^F^GABc',
                    harmonic: '^C^DE^F^GA^Bc',
                },
                chord: {
                    triad: "[^CE^G][^D^FA][E^G^B][^FA^c][^G^B^d][A^ce][^B^d^f][^ce^g]",
                    triadChord: ['C#m', 'D#<sup>o</sup>', 'E+', 'F#m', 'G#', 'A', 'B#<sup>o</sup>', 'C#m'],
                    seventh: "[^CE^G][^D^FA][E^G^B][^FA^c][^G^B^d][A^ce][^B^d^f][^ce^g]", // dummy
                    seventhChord: ['C#m', 'D#<sup>o</sup>', 'E+', 'F#m', 'G#', 'A', 'B#<sup>o</sup>', 'C#m'], // dummy
                },
            },
        },
    },
    {
        major: {
            name: 'B',
            keySignature: {
                scale: {
                    natural: 'B,CDEFGAB',
                    harmonic: 'B,CDEFGAB', // dummy
                },
                chord: {
                    triad: "[B,DF][CEG][DFA][EGB][FAc][GBd][Ace][Bdf]",
                    triadChord: ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m', 'A#<sup>o</sup>', 'B'],
                    seventh: "[B,DFA][CEGB][DFAc][EGBd][FAce][GBdf][Aceg][Bdfa]",
                    seventhChord: ['BΔ7', 'C#m7', 'D#m7', 'EΔ7', 'F#7', 'G#m7', 'A#<sup>ø</sup>7', 'BΔ7'],
                },
            },
            accidental: {
                scale: {
                    natural: 'B,^C^DE^F^G^AB',
                    harmonic: 'B,^C^DE^F^G^AB', // dummy
                },
                chord: {
                    triad: "[B,^D^F][^CE^G][^D^F^A][E^GB][^F^A^c][^GB^d][^A^ce][B^d^f]",
                    triadChord: ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m', 'A#<sup>o</sup>', 'B'],
                    seventh: "[B,^D^F^A][^CE^GB][^D^F^A^c][E^GB^d][^F^A^ce][^GB^d^f][^A^ce^g][B^d^f^a]",
                    seventhChord: ['BΔ7', 'C#m7', 'D#m7', 'EΔ7', 'F#7', 'G#m7', 'A#<sup>ø</sup>7', 'BΔ7'],
                },
            },
        },
        minor: {
            name: 'G#m',
            keySignature: {
                scale: {
                    natural: 'GABcdefg',
                    harmonic: 'GABcde^fg',
                },
                chord: {
                    triad: "[GBd][Ace][Bd^f][ceg][d^fa][egb][^fac'][gbd']",
                    triadChord: ['G#m', 'A#<sup>o</sup>', 'B+', 'C#m', 'D#', 'E', 'F#<sup>o</sup>', 'G#m'],
                    seventh: "[GBd][Ace][Bd^f][ceg][d^fa][egb][^fac'][gbd']", // dummy
                    seventhChord: ['G#m', 'A#<sup>o</sup>', 'B+', 'C#m', 'D#', 'E', 'F#<sup>o</sup>', 'G#m'], // dummy
                },
            },
            accidental: {
                scale: {
                    natural: '^G^AB^c^de^f^g',
                    harmonic: '^G^AB^c^de^^f^g',
                },
                chord: {
                    triad: "[^GB^d][^A^ce][B^d^^f][^ce^g][^d^^f^a][e^gb][^^f^a^c'][^gb^d']",
                    triadChord: ['G#m', 'A#<sup>o</sup>', 'B+', 'C#m', 'D#', 'E', 'F#<sup>o</sup>', 'G#m'],
                    seventh: "[^GB^d][^A^ce][B^d^^f][^ce^g][^d^^f^a][e^gb][^^f^a^c'][^gb^d']", // dummy
                    seventhChord: ['G#m', 'A#<sup>o</sup>', 'B+', 'C#m', 'D#', 'E', 'F#<sup>o</sup>', 'G#m'], // dummy
                },
            },
        },
    },
    {
        major: {
            name: 'Gb/F#',
            keySignature: {
                scale: {
                    natural: 'GABcdefg',
                    harmonic: 'GABcdefg', // dummy
                },
                chord: {
                    triad: "[GBd][Ace][Bdf][ceg][dfa][egb][fac'][gbd']",
                    triadChord: ['Gb', 'Abm', 'Bbm', 'Cb', 'Db', 'Ebm', 'F<sup>o</sup>', 'Gb'],
                    seventh: "[GBdf][Aceg][Bdfa][cegb][dfac'][egbd'][fac'e'][gbd'f']",
                    seventhChord: ['GbΔ7', 'Abm7', 'Bbm7', 'Cb7', 'Db7', 'Ebm7', 'F<sup>ø</sup>7', 'GbΔ7'],
                },
            },
            accidental: {
                scale: {
                    natural: '_G_A_B_c_d_ef_g',
                    harmonic: '_G_A_B_c_d_ef_g', // dummy
                },
                chord: {
                    triad: "[_G_B_d][_A_c_e][_B_df][_c_e_g][_df_a][_e_g_b][f_a_c'][_g_b_d']",
                    triadChord: ['Gb', 'Abm', 'Bbm', 'Cb', 'Db', 'Ebm', 'F<sup>o</sup>', 'Gb'],
                    seventh: "[_G_B_df][_A_c_e_g][_B_df_a][_c_e_g_b][_df_a_c'][_e_g_b_d'][f_a_c'_e'][_g_b_d'f']",
                    seventhChord: ['GbΔ7', 'Abm7', 'Bbm7', 'Cb7', 'Db7', 'Ebm7', 'F<sup>ø</sup>7', 'GbΔ7'],
                },
            },
        },
        minor: {
            name: 'Ebm/D#m',
            keySignature: {
                scale: {
                    natural: 'EFGABcde',
                    harmonic: 'EFGABc=de',
                },
                chord: {
                    triad: "[EGB][FAc][GB=d][Ace][B=df][ceg][=dfa][egb]",
                    triadChord: ['Ebm', 'F<sup>o</sup>', 'Gb+', 'Abm', 'Bb#', 'Cb', 'D<sup>o</sup>', 'Ebm'],
                    seventh: "[GBd][Ace][Bd^f][ceg][d^fa][egb][^fac'][gbd']", // dummy
                    seventhChord: ['Ebm', 'F<sup>o</sup>', 'Gb+', 'Abm', 'Bb#', 'Cb', 'D<sup>o</sup>', 'Ebm'], // dummy
                },
            },
            accidental: {
                scale: {
                    natural: '_EF_G_A_B_c_d_e',
                    harmonic: '_EF_G_A_B_cd_e',
                },
                chord: {
                    triad: "[_E_G_B][F_A_c][_G_Bd][_A_c_e][_Bdf][_c_e_g][df_a][_e_g_b]",
                    triadChord: ['Ebm', 'F<sup>o</sup>', 'Gb+', 'Abm', 'Bb#', 'Cb', 'D<sup>o</sup>', 'Ebm'],
                    seventh: "[_E_G_B][F_A_c][_G_Bd][_A_c_e][_Bdf][_c_e_g][df_a][_e_g_b]", // dummy
                    seventhChord: ['Ebm', 'F<sup>o</sup>', 'Gb+', 'Abm', 'Bb#', 'Cb', 'D<sup>o</sup>', 'Ebm'], // dummy
                },
            },
        },
    },
    {
        major: {
            name: 'Db',
            keySignature: {
                scale: {
                    natural: 'DEFGABcd',
                    harmonic: 'DEFGABcd', // dummy
                },
                chord: {
                    triad: "[DFA][EGB][FAc][GBd][Ace][Bdf][ceg][dfa]",
                    triadChord: ['Db', 'Ebm', 'Fm', 'Gb', 'Ab', 'Bbm', 'C<sup>o</sup>', 'Db'],
                    seventh: "[DFAc][EGBd][FAce][GBdf][Aceg][Bdfa][cegb][dfac']",
                    seventhChord: ['DbΔ7', 'Ebm7', 'Fm7', 'GbΔ7', 'Ab7', 'Bbm7', 'C<sup>ø</sup>7', 'DbΔ7'],
                },
            },
            accidental: {
                scale: {
                    natural: '_D_EF_G_A_Bc_d',
                    harmonic: '_D_EF_G_A_Bc_d', // dummy
                },
                chord: {
                    triad: "[_DF_A][_E_G_B][F_Ac][_G_B_d][_Ac_e][_B_df][c_e_g][_df_a]",
                    triadChord: ['Db', 'Ebm', 'Fm', 'Gb', 'Ab', 'Bbm', 'C<sup>o</sup>', 'Db'],
                    seventh: "[_DF_Ac][_E_G_B_d][F_Ac_e][_G_B_d_f][_Ac_e_g][_B_df_a][c_e_g_b][_df_ac']",
                    seventhChord: ['DbΔ7', 'Ebm7', 'Fm7', 'GbΔ7', 'Ab7', 'Bbm7', 'C<sup>ø</sup>7', 'DbΔ7'],
                },
            },
        },
        minor: {
            name: 'Bbm',
            keySignature: {
                scale: {
                    natural: 'B,CDEFGAB',
                    harmonic: 'B,CDEFG=AB',
                },
                chord: {
                    triad: "[B,DF][CEG][DF=A][EGB][F=Ac][GBd][=Ace][Bdf]",
                    triadChord: ['Bbm', 'C<sup>o</sup>', 'Db+', 'Ebm', 'F', 'Gb', 'A<sup>o</sup>', 'Bbm'],
                    seventh: "[B,DF][CEG][DF=A][EGB][F=Ac][GBd][=Ace][Bdf]", // dummy
                    seventhChord: ['Bbm', 'C<sup>o</sup>', 'Db+', 'Ebm', 'F', 'Gb', 'A<sup>o</sup>', 'Bbm'], // dummy
                },
            },
            accidental: {
                scale: {
                    natural: '_B,C_D_EF_G_A_B',
                    harmonic: '_B,C_D_EF_GA_B',
                },
                chord: {
                    triad: "[_B,_DF][C_E_G][_DFA][_E_G_B][FAc][_G_B_d][Ac_e][_B_df]",
                    triadChord: ['Bbm', 'C<sup>o</sup>', 'Db+', 'Ebm', 'F', 'Gb', 'A<sup>o</sup>', 'Bbm'],
                    seventh: "[_B,_DF][C_E_G][_DFA][_E_G_B][FAc][_G_B_d][Ac_e][_B_df]", // dummy
                    seventhChord: ['Bbm', 'C<sup>o</sup>', 'Db+', 'Ebm', 'F', 'Gb', 'A<sup>o</sup>', 'Bbm'], // dummy
                },
            },
        },
    },
    {
        major: {
            name: 'Ab',
            keySignature: {
                scale: {
                    natural: 'A,B,CDEFGA',
                    harmonic: 'A,B,CDEFGA', // dummy
                },
                chord: {
                    triad: "[A,CE][B,DF][CEG][DFA][EGB][FAc][GBd][Ace]",
                    triadChord: ['Ab', 'Bbm', 'Cm', 'Db', 'Eb', 'Fm', 'G<sup>o</sup>', 'Ab'],
                    seventh: "[A,CEG][B,DFA][CEGB][DFAc][EGBd][FAce][GBdf][Aceg]",
                    seventhChord: ['AbΔ7', 'Bbm7', 'Cm7', 'DbΔ7', 'Eb7', 'Fm7', 'G<sup>ø</sup>7', 'AbΔ7'],
                },
            },
            accidental: {
                scale: {
                    natural: '_A,_B,C_D_EFG_A',
                    harmonic: '_A,_B,C_D_EFG_A', // dummy
                },
                chord: {
                    triad: "[_A,CE][_B,_DF][C_EG][_DF_A][_EG_B][F_Ac][G_B_d][_Ac_e]",
                    triadChord: ['Ab', 'Bbm', 'Cm', 'Db', 'Eb', 'Fm', 'G<sup>o</sup>', 'Ab'],
                    seventh: "[_A,C_EG][_B,_DF_A][C_EG_B][_DF_Ac][_EG_B_d][F_Ac_e][G_B_df][_Ac_eg]",
                    seventhChord: ['AbΔ7', 'Bbm7', 'Cm7', 'DbΔ7', 'Eb7', 'Fm7', 'G<sup>ø</sup>7', 'AbΔ7'],
                },
            },
        },
        minor: {
            name: 'Fm',
            keySignature: {
                scale: {
                    natural: 'FGABcdef',
                    harmonic: 'FGABcd=ef',
                },
                chord: {
                    triad: "[FAc][GBd][Ac=e][Bdf][c=eg][dfa][=egb][fac']",
                    triadChord: ['Fm', 'G<sup>o</sup>', 'Ab+', 'Bbm', 'C', 'Db', 'E<sup>o</sup>', 'Fm'],
                    seventh: "[FAc][GBd][Ac=e][Bdf][c=eg][dfa][=egb][fac']", // dummy
                    seventhChord: ['Fm', 'G<sup>o</sup>', 'Ab+', 'Bbm', 'C', 'Db', 'E<sup>o</sup>', 'Fm'], // dummy
                },
            },
            accidental: {
                scale: {
                    natural: 'FG_A_Bc_d_ef',
                    harmonic: 'FG_A_Bc_def',
                },
                chord: {
                    triad: "[F_Ac][G_B_d][_Ace][_B_df][ceg][_df_a][eg_b][f_ac']",
                    triadChord: ['Fm', 'G<sup>o</sup>', 'Ab+', 'Bbm', 'C', 'Db', 'E<sup>o</sup>', 'Fm'],
                    seventh: "[F_Ac][G_B_d][_Ace][_B_df][ceg][_df_a][eg_b][f_ac']", // dummy
                    seventhChord: ['Fm', 'G<sup>o</sup>', 'Ab+', 'Bbm', 'C', 'Db', 'E<sup>o</sup>', 'Fm'], // dummy
                },
            },
        },
    },
    {
        major: {
            name: 'Eb',
            keySignature: {
                scale: {
                    natural: 'EFGABcde',
                    harmonic: 'EFGABcde', // dummy
                },
                chord: {
                    triad: "[EGB][FAc][GBd][Ace][Bdf][ceg][dfa][egb]",
                    triadChord: ['Eb', 'Fm', 'Gm', 'Ab', 'Bb', 'Cm', 'D<sup>o</sup>', 'Eb'],
                    seventh: "[EGBd][FAce][GBdf][Aceg][Bdfa][cegb][dfac'][egbd']",
                    seventhChord: ['EbΔ7', 'Fm7', 'Gm7', 'AbΔ7', 'Bb7', 'Cm7', 'D<sup>ø</sup>7', 'EbΔ7'],
                },
            },
            accidental: {
                scale: {
                    natural: '_EFG_A_Bcde',
                    harmonic: '_EFG_A_Bcde', // dummy
                },
                chord: {
                    triad: "[_EG_B][F_Ac][G_Bd][_Ac_e][_Bdf][c_eg][df_a][_eg_b]",
                    triadChord: ['Eb', 'Fm', 'Gm', 'Ab', 'Bb', 'Cm', 'D<sup>o</sup>', 'Eb'],
                    seventh: "[_EG_Bd][F_Ac_e][G_Bdf][_Ac_eg][_Bdf_a][c_eg_b][df_ac'][_eg_bd']",
                    seventhChord: ['EbΔ7', 'Fm7', 'Gm7', 'AbΔ7', 'Bb7', 'Cm7', 'D<sup>ø</sup>7', 'EbΔ7'],
                },
            },
        },
        minor: {
            name: 'Cm',
            keySignature: {
                scale: {
                    natural: 'CDEFGABc',
                    harmonic: 'CDEFGA=Bc',
                },
                chord: {
                    triad: "[CEG][DFA][EG=B][FAc][G=Bd][Ace][=Bdf][ceg]",
                    triadChord: ['Cm', 'D<sup>o</sup>', 'Eb+', 'Fm', 'G', 'Ab', 'B<sup>o</sup>', 'Cm'],
                    seventh: "[CEG][DFA][EG=B][FAc][G=Bd][Ace][=Bdf][ceg]", // dummy
                    seventhChord: ['Cm', 'D<sup>o</sup>', 'Eb+', 'Fm', 'G', 'Ab', 'B<sup>o</sup>', 'Cm'], // dummy
                },
            },
            accidental: {
                scale: {
                    natural: 'CD_EFG_A_Bc',
                    harmonic: 'CD_EFG_ABc',
                },
                chord: {
                    triad: "[C_EG][DF_A][_EGB][F_Ac][GBd][_Ac_e][Bdf][c_eg]",
                    triadChord: ['Cm', 'D<sup>o</sup>', 'Eb+', 'Fm', 'G', 'Ab', 'B<sup>o</sup>', 'Cm'],
                    seventh: "[C_EG][DF_A][_EGB][F_Ac][GBd][_Ac_e][Bdf][c_eg]", // dummy
                    seventhChord: ['Cm', 'D<sup>o</sup>', 'Eb+', 'Fm', 'G', 'Ab', 'B<sup>o</sup>', 'Cm'], // dummy
                },
            },
        },
    },
    {
        major: {
            name: 'Bb',
            keySignature: {
                scale: {
                    natural: 'B,CDEFGAB',
                    harmonic: 'B,CDEFGAB', // dummy
                },
                chord: {
                    triad: "[B,DF][CEG][DFA][EGB][FAc][GBd][Ace][Bdf]",
                    triadChord: ['Bb', 'Cm', 'Dm', 'Eb', 'F', 'Gm', 'A<sup>o</sup>', 'Bb'],
                    seventh: "[B,DFA][CEGB][DFAc][EGBd][FAce][GBdf][Aceg][Bdfa]",
                    seventhChord: ['BbΔ7', 'Cm7', 'Dm7', 'EbΔ7', 'F7', 'Gm7', 'A<sup>ø</sup>7', 'BbΔ7'],
                },
            },
            accidental: {
                scale: {
                    natural: '_B,CD_EFGAB',
                    harmonic: '_B,CD_EFGAB', // dummy
                },
                chord: {
                    triad: "[_B,DF][C_EG][DFA][_EG_B][FAc][G_Bd][Ac_e][_Bdf]",
                    triadChord: ['Bb', 'Cm', 'Dm', 'Eb', 'F', 'Gm', 'A<sup>o</sup>', 'Bb'],
                    seventh: "[_B,DFA][C_EG_B][DFAc][_EG_Bd][FAc_e][G_Bdf][Ac_eg][_Bdfa]",
                    seventhChord: ['BbΔ7', 'Cm7', 'Dm7', 'EbΔ7', 'F7', 'Gm7', 'A<sup>ø</sup>7', 'BbΔ7'],
                },
            },
        },
        minor: {
            name: 'Gm',
            keySignature: {
                scale: {
                    natural: 'GABcdefg',
                    harmonic: 'GABcde^fg',
                },
                chord: {
                    triad: "[GBd][Ace][Bd^f][ceg][d^fa][egb][^fac'][gbd']",
                    triadChord: ['Gm', 'A<sup>o</sup>', 'Bb+', 'Cm', 'D', 'Eb', 'F#<sup>o</sup>', 'Gm'],
                    seventh: "[GBd][Ace][Bd^f][ceg][d^fa][egb][^fac'][gbd']", // dummy
                    seventhChord: ['Gm', 'A<sup>o</sup>', 'Bb+', 'Cm', 'D', 'Eb', 'F#<sup>o</sup>', 'Gm'], // dummy
                },
            },
            accidental: {
                scale: {
                    natural: 'GA_Bcd_efg',
                    harmonic: 'GA_Bcd_e^fg',
                },
                chord: {
                    triad: "[G_Bd][Ac_e][_Bd^f][c_eg][d^fa][_eg_b][^fac'][g_bd']",
                    triadChord: ['Gm', 'A<sup>o</sup>', 'Bb+', 'Cm', 'D', 'Eb', 'F#<sup>o</sup>', 'Gm'],
                    seventh: "[G_Bd][Ac_e][_Bd^f][c_eg][d^fa][_eg_b][^fac'][g_bd']", // dummy
                    seventhChord: ['Gm', 'A<sup>o</sup>', 'Bb+', 'Cm', 'D', 'Eb', 'F#<sup>o</sup>', 'Gm'], // dummy
                },
            },
        },
    },
    {
        major: {
            name: 'F',
            keySignature: {
                scale: {
                    natural: 'FGABcdef',
                    harmonic: 'FGABcdef', // dummy
                },
                chord: {
                    triad: "[FAc][GBd][Ace][Bdf][ceg][dfa][egb][fac']",
                    triadChord: ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm', 'E<sup>o</sup>', 'F'],
                    seventh: "[FAce][GBdf][Aceg][Bdfa][cegb][dfac'][egbd'][fac'e']",
                    seventhChord: ['FΔ7', 'Gm7', 'Am7', 'BbΔ7', 'C7', 'Dm7', 'E<sup>ø</sup>7', 'FΔ7'],
                },
            },
            accidental: {
                scale: {
                    natural: 'FGA_Bcdef',
                    harmonic: 'FGA_Bcdef', // dummy
                },
                chord: {
                    triad: "[FAc][G_Bd][Ace][_Bdf][ceg][dfa][eg_b][fac']",
                    triadChord: ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm', 'E<sup>o</sup>', 'F'],
                    seventh: "[FAce][G_Bdf][Aceg][_Bdfa][ceg_b][dfac'][eg_bd'][fac'e']",
                    seventhChord: ['FΔ7', 'Gm7', 'Am7', 'BbΔ7', 'C7', 'Dm7', 'E<sup>ø</sup>7', 'FΔ7'],
                },
            },
        },
        minor: {
            name: 'Dm',
            keySignature: {
                scale: {
                    natural: 'DEFGABcd',
                    harmonic: 'DEFGAB^cd',
                },
                chord: {
                    triad: "[DFA][EGB][FA^c][GBd][A^ce][Bdf][^ceg][dfa]",
                    triadChord: ['Dm', 'E<sup>o</sup>', 'F+', 'Gm', 'A', 'Bb', 'C#<sup>o</sup>', 'Dm'],
                    seventh: "[DFA][EGB][FA^c][GBd][A^ce][Bdf][^ceg][dfa]", // dummy
                    seventhChord: ['Dm', 'E<sup>o</sup>', 'F+', 'Gm', 'A', 'Bb', 'C#<sup>o</sup>', 'Dm'], // dummy
                },
            },
            accidental: {
                scale: {
                    natural: 'DEFGA_Bcd',
                    harmonic: 'DEFGA_B^cd',
                },
                chord: {
                    triad: "[DFA][EG_B][FA^c][G_Bd][A^ce][_Bdf][^ceg][dfa]",
                    triadChord: ['Dm', 'E<sup>o</sup>', 'F+', 'Gm', 'A', 'Bb', 'C#<sup>o</sup>', 'Dm'],
                    seventh: "[DFA][EG_B][FA^c][G_Bd][A^ce][_Bdf][^ceg][dfa]", // dummy
                    seventhChord: ['Dm', 'E<sup>o</sup>', 'F+', 'Gm', 'A', 'Bb', 'C#<sup>o</sup>', 'Dm'], // dummy
                },
            },
        },
    },
];

const option = {
    mode: 'scale',
    scaleMode: 'natural',
    chordMode: 'triad',
    signMode: 'keySignature',
    currentKey: keys[0],
    currentTone: 'major',
};

const stage = new Konva.Stage({
    container: 'main__canvas--circle',
    width: document.getElementById('main__canvas').clientWidth,
    height: document.getElementById('main__canvas').clientHeight,
});

const maxRadius = Math.min(stage.width(), stage.height()) / 2 - 20;

const layer = new Konva.Layer();

keys.forEach((key, idx) => {
    function onhover(node, tone){
        node.fill(lighten(node.fill(), -15));
        option.currentKey = key;
        option.currentTone = tone;
        renderBar(getAbcstr());
        layer.draw();
    }

    function onhoverend(node){
        node.fill(lighten(node.fill(), 15));
        layer.draw();
    }

    function lighten(hsl, val){
        const arg = hsl.match(/hsl\((.*), (.*), (.*)\)/);
        return `hsl(${ arg[1] }, ${ Number.parseInt(arg[2]) + val }%, ${ Number.parseInt(arg[3]) + val }%)`
    }

    [{
        name: 'major',
        innerFactor: 0.85,
        outerFactor: 1,
        oddFill: 'hsl(54, 100%, 70%)',
        evenFill: 'hsl(50, 96%, 55%)',
    },
    {
        name: 'minor',
        innerFactor: 0.7,
        outerFactor: 0.85,
        oddFill: 'hsl(38, 80%, 94%)',
        evenFill: 'hsl(39, 64%, 83%)',
    }].forEach(tonality => {
        const arc = new Konva.Arc({
            x: stage.width() / 2,
            y: stage.height() / 2,
            innerRadius: maxRadius * tonality.innerFactor,
            outerRadius: maxRadius * tonality.outerFactor,
            rotation: -105 + idx * 30,
            angle: 30,
            fill: idx % 2 ? tonality.oddFill : tonality.evenFill,
            stroke: '#332011',
            strokeWidth: 1,
        });
        arc.on('mouseover touchstart', () => { onhover(arc, tonality.name); });
        arc.on('mouseout touchend', () => { onhoverend(arc); });
        layer.add(arc);

        const textRadius = (arc.innerRadius() + arc.outerRadius()) / 2;
        const text = new Konva.Text({
            x: arc.x() + textRadius * Math.cos(Math.PI / 180 * (90 - idx * 30)),
            y: arc.y() - textRadius * Math.sin(Math.PI / 180 * (90 - idx * 30)),
            text: key[tonality.name].name,
            fontSize: maxRadius * 0.09,
            fontFamily: 'Calibri',
            fill: 'black',
            rotation: idx * 30,
        })
        text.offsetX(text.width() / 2);
        text.offsetY(text.fontSize() * 0.4);
        text.on('mouseover touchstart', () => { onhover(arc, tonality.name); });
        text.on('mouseout touchend', () => { onhoverend(arc); });
        layer.add(text);
    });
});

stage.add(layer);

renderBar(getAbcstr());
chordName.style.width = `${ maxRadius * 1.1 }px`;

function getAbcstr(){
    return 'X:1\n'+
        'L:1\n' +
        `T:${ option.currentKey[option.currentTone].name.replace(/m/g, '') } ${ option.currentTone }\n` +
        `K:${ option.signMode === 'keySignature' ? option.currentKey[option.currentTone].name.split('/')[0] : 'C' }\n` +
        `${ option.currentKey[option.currentTone][option.signMode][option.mode][option[`${ option.mode }Mode`]] }|`;
}

function renderBar(abcstr){
    ABCJS.renderAbc(
        'main__canvas--paper',
        abcstr,
        {
            scale: maxRadius * 0.005,
            staffwidth: maxRadius * 0.9 * 2,
            paddingtop: 0,
            paddingbottom: 0,
            paddingright: 0,
            paddingleft: 0,
        }
    );
    if(option.mode === 'chord'){
        chordName.style.display = 'flex';
        chords.forEach((span, idx) => {
            span.innerHTML = option.currentKey[option.currentTone][option.signMode]['chord'][`${ option.chordMode }Chord`][idx];
        });
    }
    else {
        chordName.style.display = 'none';
    }
}

function optionOnchange(){
    if(option.mode === 'scale'){
        scaleOptionSelector.style.display = 'inline-block';
        chordOptionSelector.style.display = 'none';
    }
    else if(option.mode === 'chord'){
        scaleOptionSelector.style.display = 'none';
        chordOptionSelector.style.display = 'inline-block';
    }
    renderBar(getAbcstr());
}

function modeOnchange(element){
    option.mode = element.value;
    optionOnchange();
}

function scaleModeOnchange(element){
    option.scaleMode = element.value;
    optionOnchange();
}

function chordModeOnchange(element){
    option.chordMode = element.value;
    optionOnchange();
}

function signModeOnchange(element){
    option.signMode = element.value;
    optionOnchange();
}