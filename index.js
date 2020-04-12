const scaleOptionSelector = document.querySelector('.main__option--scale');
const chordOptionSelector = document.querySelector('.main__option--chord');

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
                    triadChord: ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bo', 'C'],
                    seventh: "[CEGB][DFAc][EGBd][FAce][GBdf][Aceg][Bdfa][cegb]",
                    seventhChord: ['CΔ7', 'Dm7', 'Em7', 'FΔ7', 'G7', 'Am7', 'Bø7', 'CΔ7'],
                },
            },
            accidental: {
                scale: {
                    natural: 'CDEFGABc',
                    harmonic: 'CDEFGABc', // dummy
                },
                chord: {
                    triad: "[CEG][DFA][EGB][FAc][GBd][Ace][Bdf][ceg]",
                    triadChord: ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bo', 'C'],
                    seventh: "[CEGB][DFAc][EGBd][FAce][GBdf][Aceg][Bdfa][cegb]",
                    seventhChord: ['CΔ7', 'Dm7', 'Em7', 'FΔ7', 'G7', 'Am7', 'Bø7', 'CΔ7'],
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
                    triadChord: ['Am', 'Bo', 'C+', 'Dm', 'E', 'F', 'G#o', 'Am'],
                    seventh: "[A,CE][B,DF][CE^G][DFA][E^GB][FAc][^GBd][Ace]", // dummy
                    seventhChord: ['Am', 'Bo', 'C+', 'Dm', 'E', 'F', 'G#o', 'Am'], // dummy
                },
            },
            accidental: {
                scale: {
                    natural: 'A,B,CDEFGA',
                    harmonic: 'A,B,CDEF^GA',
                },
                chord: {
                    triad: "[A,CE][B,DF][CE^G][DFA][E^GB][FAc][^GBd][Ace]",
                    triadChord: ['Am', 'Bo', 'C+', 'Dm', 'E', 'F', 'G#o', 'Am'],
                    seventh: "[A,CE][B,DF][CE^G][DFA][E^GB][FAc][^GBd][Ace]", // dummy
                    seventhChord: ['Am', 'Bo', 'C+', 'Dm', 'E', 'F', 'G#o', 'Am'], // dummy
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
                    triadChord: ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#o', 'G'],
                    seventh: "[GBdf][Aceg][Bdfa][cegb][dfac'][egbd'][fac'e'][gbd'f']",
                    seventhChord: ['GΔ7', 'Am7', 'Bm7', 'CΔ7', 'D7', 'Em7', 'F#ø7', 'GΔ7'],
                },
            },
            accidental: {
                scale: {
                    natural: 'GABcde^fg',
                    harmonic: 'GABcde^fg', // dummy
                },
                chord: {
                    triad: "[GBd][Ace][Bd^f][ceg][d^fa][egb][^fac'][gbd']",
                    triadChord: ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#o', 'G'],
                    seventh: "[GBd^f][Aceg][Bd^fa][cegb][d^fac'][egbd'][^fac'e'][gbd'^f']",
                    seventhChord: ['GΔ7', 'Am7', 'Bm7', 'CΔ7', 'D7', 'Em7', 'F#ø7', 'GΔ7'],
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
                    triadChord: ['Em', 'F#o', 'G+', 'Am', 'B', 'C', 'D#o', 'Em'],
                    seventh: "[EGB][FAc][GB^d][Ace][B^df][ceg][^dfa][egb]", // dummy
                    seventhChord: ['Em', 'F#o', 'G+', 'Am', 'B', 'C', 'D#o', 'Em'], // dummy
                },
            },
            accidental: {
                scale: {
                    natural: 'E^FGABcde',
                    harmonic: 'E^FGABc^de',
                },
                chord: {
                    triad: "[EGB][^FAc][GB^d][Ace][B^d^f][ceg][^d^fa][egb]",
                    triadChord: ['Em', 'F#o', 'G+', 'Am', 'B', 'C', 'D#o', 'Em'],
                    seventh: "[EGB][^FAc][GB^d][Ace][B^d^f][ceg][^d^fa][egb]", // dummy
                    seventhChord: ['Em', 'F#o', 'G+', 'Am', 'B', 'C', 'D#o', 'Em'], // dummy
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
                    triadChord: ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#o', 'D'],
                    seventh: "[DFAc][EGBd][FAce][GBdf][Aceg][Bdfa][cegb][dfac']",
                    seventhChord: ['DΔ7', 'Em7', 'F#m7', 'GΔ7', 'A7', 'Bm7', 'C#ø7', 'DΔ7'],
                },
            },
            accidental: {
                scale: {
                    natural: 'DE^FGAB^cd',
                    harmonic: 'DE^FGAB^cd', // dummy
                },
                chord: {
                    triad: "[D^FA][EGB][^FA^c][GBd][A^ce][Bd^f][^ceg][d^fa]",
                    triadChord: ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#o', 'D'],
                    seventh: "[D^FA^c][EGBd][^FA^ce][GBdf][A^ceg][Bd^fa][^cegb][d^fa^c']",
                    seventhChord: ['DΔ7', 'Em7', 'F#m7', 'GΔ7', 'A7', 'Bm7', 'C#ø7', 'DΔ7'],
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
                    triadChord: ['Bm', 'C#o', 'D+', 'Em', 'F#', 'G', 'A#o', 'Bm'],
                    seventh: "[B,DF][CEG][DF^A][EGB][F^Ac][GBd][^Ace][Bdf]", // dummy
                    seventhChord: ['Bm', 'C#o', 'D+', 'Em', 'F#', 'G', 'A#o', 'Bm'], // dummy
                },
            },
            accidental: {
                scale: {
                    natural: 'B,^CDE^FGAB',
                    harmonic: 'B,^CDE^FG^AB',
                },
                chord: {
                    triad: "[B,D^F][^CEG][D^F^A][EGB][^F^A^c][GBd][^A^ce][Bd^f]",
                    triadChord: ['Bm', 'C#o', 'D+', 'Em', 'F#', 'G', 'A#o', 'Bm'],
                    seventh: "[B,D^F][^CEG][D^F^A][EGB][^F^A^c][GBd][^A^ce][Bd^f]", // dummy
                    seventhChord: ['Bm', 'C#o', 'D+', 'Em', 'F#', 'G', 'A#o', 'Bm'], // dummy
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
                    triadChord: ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#o', 'A'],
                    seventh: "[A,CEG][B,DFA][CEGB][DFAc][EGBd][FAce][GBdf][Aceg]",
                    seventhChord: ['AΔ7', 'Bm7', 'C#m7', 'DΔ7', 'E7', 'F#m7', 'G#ø7', 'AΔ7'],
                },
            },
            accidental: {
                scale: {
                    natural: 'A,B,^CDE^F^GA',
                    harmonic: 'A,B,^CDE^F^GA', // dummy
                },
                chord: {
                    triad: "[A,^CE][B,D^F][^CE^G][D^FA][E^GB][^FA^c][^GBd][A^ce]",
                    triadChord: ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#o', 'A'],
                    seventh: "[A,^CE^G][B,D^FA][^CE^GB][D^FA^c][E^GBd][^FA^ce][^GBdf][A^ceg]",
                    seventhChord: ['AΔ7', 'Bm7', 'C#m7', 'DΔ7', 'E7', 'F#m7', 'G#ø7', 'AΔ7'],
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
                    triadChord: ['F#m', 'G#o', 'A+', 'Bm', 'C#', 'D', 'E#o', 'F#m'],
                    seventh: "[FAc][GBd][Ac^e][Bdf][c^eg][dfa][^egb][fac']", // dummy
                    seventhChord: ['F#m', 'G#o', 'A+', 'Bm', 'C#', 'D', 'E#o', 'F#m'], // dummy
                },
            },
            accidental: {
                scale: {
                    natural: '^F^GAB^cdef',
                    harmonic: '^F^GAB^cd^ef',
                },
                chord: {
                    triad: "[^FA^c][^GBd][A^c^e][Bd^f][^c^e^g][d^fa][^e^gb][^fa^c']",
                    triadChord: ['F#m', 'G#o', 'A+', 'Bm', 'C#', 'D', 'E#o', 'F#m'],
                    seventh: "[^FA^c][^GBd][A^c^e][Bd^f][^c^e^g][d^fa][^e^gb][^fa^c']", // dummy
                    seventhChord: ['F#m', 'G#o', 'A+', 'Bm', 'C#', 'D', 'E#o', 'F#m'], // dummy
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
                    triadChord: ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#o', 'E'],
                    seventh: "[EGBd][FAce][GBdf][Aceg][Bdfa][cegb][dfac'][egbd']",
                    seventhChord: ['EΔ7', 'F#m7', 'G#m7', 'AΔ7', 'B7', 'C#m7', 'D#ø7', 'EΔ7'],
                },
            },
            accidental: {
                scale: {
                    natural: 'E^F^GAB^c^de',
                    harmonic: 'E^F^GAB^c^de', // dummy
                },
                chord: {
                    triad: "[E^GB][^FA^c][^GB^d][A^ce][B^d^f][^ce^g][^d^fa][e^gb]",
                    triadChord: ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#o', 'E'],
                    seventh: "[E^GB^d][^FA^ce][^GB^d^f][A^ce^g][B^d^fa][^ce^gb][^d^fa^c'][e^gb^d']",
                    seventhChord: ['EΔ7', 'F#m7', 'G#m7', 'AΔ7', 'B7', 'C#m7', 'D#ø7', 'EΔ7'],
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
                    triadChord: ['C#m', 'D#o', 'E+', 'F#m', 'G#', 'A', 'B#o', 'C#m'],
                    seventh: "[CEG][DFA][EG^B][FAc][G^Bd][Ace][^Bdf][ceg]", // dummy
                    seventhChord: ['C#m', 'D#o', 'E+', 'F#m', 'G#', 'A', 'B#o', 'C#m'], // dummy
                },
            },
            accidental: {
                scale: {
                    natural: '^C^DE^F^GABc',
                    harmonic: '^C^DE^F^GA^Bc',
                },
                chord: {
                    triad: "[^CE^G][^D^FA][E^G^B][^FA^c][^G^B^d][A^ce][^B^d^f][^ce^g]",
                    triadChord: ['C#m', 'D#o', 'E+', 'F#m', 'G#', 'A', 'B#o', 'C#m'],
                    seventh: "[^CE^G][^D^FA][E^G^B][^FA^c][^G^B^d][A^ce][^B^d^f][^ce^g]", // dummy
                    seventhChord: ['C#m', 'D#o', 'E+', 'F#m', 'G#', 'A', 'B#o', 'C#m'], // dummy
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
                    triadChord: ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m', 'A#o', 'B'],
                    seventh: "[B,DFA][CEGB][DFAc][EGBd][FAce][GBdf][Aceg][Bdfa]",
                    seventhChord: ['BΔ7', 'C#m7', 'D#m7', 'EΔ7', 'F#7', 'G#m7', 'A#ø7', 'BΔ7'],
                },
            },
            accidental: {
                scale: {
                    natural: 'B,^C^DE^F^G^AB',
                    harmonic: 'B,^C^DE^F^G^AB', // dummy
                },
                chord: {
                    triad: "[B,^D^F][^CE^G][^D^F^A][E^GB][^F^A^c][^GB^d][^A^ce][B^d^f]",
                    triadChord: ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m', 'A#o', 'B'],
                    seventh: "[B,^D^F^A][^CE^GB][^D^F^A^c][E^GB^d][^F^A^ce][^GB^d^f][^A^ce^g][B^d^f^a]",
                    seventhChord: ['BΔ7', 'C#m7', 'D#m7', 'EΔ7', 'F#7', 'G#m7', 'A#ø7', 'BΔ7'],
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
                    triadChord: ['G#m', 'A#o', 'B+', 'C#m', 'D#', 'E', 'F#o', 'G#m'],
                    seventh: "[GBd][Ace][Bd^f][ceg][d^fa][egb][^fac'][gbd']", // dummy
                    seventhChord: ['G#m', 'A#o', 'B+', 'C#m', 'D#', 'E', 'F#o', 'G#m'], // dummy
                },
            },
            accidental: {
                scale: {
                    natural: '^G^AB^c^de^f^g',
                    harmonic: '^G^AB^c^de^^f^g',
                },
                chord: {
                    triad: "[^GB^d][^A^ce][B^d^^f][^ce^g][^d^^f^a][e^gb][^^f^a^c'][^gb^d']",
                    triadChord: ['G#m', 'A#o', 'B+', 'C#m', 'D#', 'E', 'F#o', 'G#m'],
                    seventh: "[^GB^d][^A^ce][B^d^^f][^ce^g][^d^^f^a][e^gb][^^f^a^c'][^gb^d']", // dummy
                    seventhChord: ['G#m', 'A#o', 'B+', 'C#m', 'D#', 'E', 'F#o', 'G#m'], // dummy
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
                    triadChord: ['Gb', 'Abm', 'Bbm', 'Cb', 'Db', 'Ebm', 'Fo', 'Gb'],
                    seventh: "[GBdf][Aceg][Bdfa][cegb][dfac'][egbd'][fac'e'][gbd'f']",
                    seventhChord: ['GbΔ7', 'Abm7', 'Bbm7', 'Cb7', 'Db7', 'Ebm7', 'Fø7', 'GbΔ7'],
                },
            },
            accidental: {
                scale: {
                    natural: '_G_A_B_c_d_ef_g',
                    harmonic: '_G_A_B_c_d_ef_g', // dummy
                },
                chord: {
                    triad: "[_G_B_d][_A_c_e][_B_df][_c_e_g][_df_a][_e_g_b][f_a_c'][_g_b_d']",
                    triadChord: ['Gb', 'Abm', 'Bbm', 'Cb', 'Db', 'Ebm', 'Fo', 'Gb'],
                    seventh: "[_G_B_df][_A_c_e_g][_B_df_a][_c_e_g_b][_df_a_c'][_e_g_b_d'][f_a_c'_e'][_g_b_d'f']",
                    seventhChord: ['GbΔ7', 'Abm7', 'Bbm7', 'Cb7', 'Db7', 'Ebm7', 'Fø7', 'GbΔ7'],
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
                    triadChord: ['Ebm', 'Fo', 'Gb+', 'Abm', 'Bb#', 'Cb', 'Do', 'Ebm'],
                    seventh: "[GBd][Ace][Bd^f][ceg][d^fa][egb][^fac'][gbd']", // dummy
                    seventhChord: ['Ebm', 'Fo', 'Gb+', 'Abm', 'Bb#', 'Cb', 'Do', 'Ebm'], // dummy
                },
            },
            accidental: {
                scale: {
                    natural: '_EF_G_A_B_c_d_e',
                    harmonic: '_EF_G_A_B_cd_e',
                },
                chord: {
                    triad: "[_E_G_B][F_A_c][_G_Bd][_A_c_e][_Bdf][_c_e_g][df_a][_e_g_b]",
                    triadChord: ['Ebm', 'Fo', 'Gb+', 'Abm', 'Bb#', 'Cb', 'Do', 'Ebm'],
                    seventh: "[_E_G_B][F_A_c][_G_Bd][_A_c_e][_Bdf][_c_e_g][df_a][_e_g_b]", // dummy
                    seventhChord: ['Ebm', 'Fo', 'Gb+', 'Abm', 'Bb#', 'Cb', 'Do', 'Ebm'], // dummy
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
                    triadChord: ['Db', 'Ebm', 'Fm', 'Gb', 'Ab', 'Bbm', 'Co', 'Db'],
                    seventh: "[DFAc][EGBd][FAce][GBdf][Aceg][Bdfa][cegb][dfac']",
                    seventhChord: ['DbΔ7', 'Ebm7', 'Fm7', 'GbΔ7', 'Ab7', 'Bbm7', 'Cø7', 'DbΔ7'],
                },
            },
            accidental: {
                scale: {
                    natural: '_D_EF_G_A_Bc_d',
                    harmonic: '_D_EF_G_A_Bc_d', // dummy
                },
                chord: {
                    triad: "[_DF_A][_E_G_B][F_Ac][_G_B_d][_Ac_e][_B_df][c_e_g][_df_a]",
                    triadChord: ['Db', 'Ebm', 'Fm', 'Gb', 'Ab', 'Bbm', 'Co', 'Db'],
                    seventh: "[_DF_Ac][_E_G_B_d][F_Ac_e][_G_B_d_f][_Ac_e_g][_B_df_a][c_e_g_b][_df_ac']",
                    seventhChord: ['DbΔ7', 'Ebm7', 'Fm7', 'GbΔ7', 'Ab7', 'Bbm7', 'Cø7', 'DbΔ7'],
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
                    triadChord: ['Bbm', 'Co', 'Db+', 'Ebm', 'F', 'Gb', 'Ao', 'Bbm'],
                    seventh: "[B,DF][CEG][DF=A][EGB][F=Ac][GBd][=Ace][Bdf]", // dummy
                    seventhChord: ['Bbm', 'Co', 'Db+', 'Ebm', 'F', 'Gb', 'Ao', 'Bbm'], // dummy
                },
            },
            accidental: {
                scale: {
                    natural: '_B,C_D_EF_G_A_B',
                    harmonic: '_B,C_D_EF_GA_B',
                },
                chord: {
                    triad: "[_B,_DF][C_E_G][_DFA][_E_G_B][FAc][_G_B_d][Ac_e][_B_df]",
                    triadChord: ['Bbm', 'Co', 'Db+', 'Ebm', 'F', 'Gb', 'Ao', 'Bbm'],
                    seventh: "[_B,_DF][C_E_G][_DFA][_E_G_B][FAc][_G_B_d][Ac_e][_B_df]", // dummy
                    seventhChord: ['Bbm', 'Co', 'Db+', 'Ebm', 'F', 'Gb', 'Ao', 'Bbm'], // dummy
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
                    triadChord: ['Ab', 'Bbm', 'Cm', 'Db', 'Eb', 'Fm', 'Go', 'Ab'],
                    seventh: "[A,CEG][B,DFA][CEGB][DFAc][EGBd][FAce][GBdf][Aceg]",
                    seventhChord: ['AbΔ7', 'Bbm7', 'Cm7', 'DbΔ7', 'Eb7', 'Fm7', 'Gø7', 'AbΔ7'],
                },
            },
            accidental: {
                scale: {
                    natural: '_A,_B,C_D_EFG_A',
                    harmonic: '_A,_B,C_D_EFG_A', // dummy
                },
                chord: {
                    triad: "[_A,CE][_B,_DF][C_EG][_DF_A][_EG_B][F_Ac][G_B_d][_Ac_e]",
                    triadChord: ['Ab', 'Bbm', 'Cm', 'Db', 'Eb', 'Fm', 'Go', 'Ab'],
                    seventh: "[_A,C_EG][_B,_DF_A][C_EG_B][_DF_Ac][_EG_B_d][F_Ac_e][G_B_df][_Ac_eg]",
                    seventhChord: ['AbΔ7', 'Bbm7', 'Cm7', 'DbΔ7', 'Eb7', 'Fm7', 'Gø7', 'AbΔ7'],
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
                    triadChord: ['Fm', 'Go', 'Ab+', 'Bbm', 'C', 'Db', 'Eo', 'Fm'],
                    seventh: "[FAc][GBd][Ac=e][Bdf][c=eg][dfa][=egb][fac']", // dummy
                    seventhChord: ['Fm', 'Go', 'Ab+', 'Bbm', 'C', 'Db', 'Eo', 'Fm'], // dummy
                },
            },
            accidental: {
                scale: {
                    natural: 'FG_A_Bc_d_ef',
                    harmonic: 'FG_A_Bc_def',
                },
                chord: {
                    triad: "[F_Ac][G_B_d][_Ace][_B_df][ceg][_df_a][eg_b][f_ac']",
                    triadChord: ['Fm', 'Go', 'Ab+', 'Bbm', 'C', 'Db', 'Eo', 'Fm'],
                    seventh: "[F_Ac][G_B_d][_Ace][_B_df][ceg][_df_a][eg_b][f_ac']", // dummy
                    seventhChord: ['Fm', 'Go', 'Ab+', 'Bbm', 'C', 'Db', 'Eo', 'Fm'], // dummy
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
                    triadChord: ['Eb', 'Fm', 'Gm', 'Ab', 'Bb', 'Cm', 'Do', 'Eb'],
                    seventh: "[EGBd][FAce][GBdf][Aceg][Bdfa][cegb][dfac'][egbd']",
                    seventhChord: ['EbΔ7', 'Fm7', 'Gm7', 'AbΔ7', 'Bb7', 'Cm7', 'Dø7', 'EbΔ7'],
                },
            },
            accidental: {
                scale: {
                    natural: '_EFG_A_Bcde',
                    harmonic: '_EFG_A_Bcde', // dummy
                },
                chord: {
                    triad: "[_EG_B][F_Ac][G_Bd][_Ac_e][_Bdf][c_eg][df_a][_eg_b]",
                    triadChord: ['Eb', 'Fm', 'Gm', 'Ab', 'Bb', 'Cm', 'Do', 'Eb'],
                    seventh: "[_EG_Bd][F_Ac_e][G_Bdf][_Ac_eg][_Bdf_a][c_eg_b][df_ac'][_eg_bd']",
                    seventhChord: ['EbΔ7', 'Fm7', 'Gm7', 'AbΔ7', 'Bb7', 'Cm7', 'Dø7', 'EbΔ7'],
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
                    triadChord: ['Cm', 'Do', 'Eb+', 'Fm', 'G', 'Ab', 'Bo', 'Cm'],
                    seventh: "[CEG][DFA][EG=B][FAc][G=Bd][Ace][=Bdf][ceg]", // dummy
                    seventhChord: ['Cm', 'Do', 'Eb+', 'Fm', 'G', 'Ab', 'Bo', 'Cm'], // dummy
                },
            },
            accidental: {
                scale: {
                    natural: 'CD_EFG_A_Bc',
                    harmonic: 'CD_EFG_ABc',
                },
                chord: {
                    triad: "[C_EG][DF_A][_EGB][F_Ac][GBd][_Ac_e][Bdf][c_eg]",
                    triadChord: ['Cm', 'Do', 'Eb+', 'Fm', 'G', 'Ab', 'Bo', 'Cm'],
                    seventh: "[C_EG][DF_A][_EGB][F_Ac][GBd][_Ac_e][Bdf][c_eg]", // dummy
                    seventhChord: ['Cm', 'Do', 'Eb+', 'Fm', 'G', 'Ab', 'Bo', 'Cm'], // dummy
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
                    triadChord: ['Bb', 'Cm', 'Dm', 'Eb', 'F', 'Gm', 'Ao', 'Bb'],
                    seventh: "[B,DFA][CEGB][DFAc][EGBd][FAce][GBdf][Aceg][Bdfa]",
                    seventhChord: ['BbΔ7', 'Cm7', 'Dm7', 'EbΔ7', 'F7', 'Gm7', 'Aø7', 'BbΔ7'],
                },
            },
            accidental: {
                scale: {
                    natural: '_B,CD_EFGAB',
                    harmonic: '_B,CD_EFGAB', // dummy
                },
                chord: {
                    triad: "[_B,DF][C_EG][DFA][_EG_B][FAc][G_Bd][Ac_e][_Bdf]",
                    triadChord: ['Bb', 'Cm', 'Dm', 'Eb', 'F', 'Gm', 'Ao', 'Bb'],
                    seventh: "[_B,DFA][C_EG_B][DFAc][_EG_Bd][FAc_e][G_Bdf][Ac_eg][_Bdfa]",
                    seventhChord: ['BbΔ7', 'Cm7', 'Dm7', 'EbΔ7', 'F7', 'Gm7', 'Aø7', 'BbΔ7'],
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
                    triadChord: ['Gm', 'Ao', 'Bb+', 'Cm', 'D', 'Eb', 'F#o', 'Gm'],
                    seventh: "[GBd][Ace][Bd^f][ceg][d^fa][egb][^fac'][gbd']", // dummy
                    seventhChord: ['Gm', 'Ao', 'Bb+', 'Cm', 'D', 'Eb', 'F#o', 'Gm'], // dummy
                },
            },
            accidental: {
                scale: {
                    natural: 'GA_Bcd_efg',
                    harmonic: 'GA_Bcd_e^fg',
                },
                chord: {
                    triad: "[G_Bd][Ac_e][_Bd^f][c_eg][d^fa][_eg_b][^fac'][g_bd']",
                    triadChord: ['Gm', 'Ao', 'Bb+', 'Cm', 'D', 'Eb', 'F#o', 'Gm'],
                    seventh: "[G_Bd][Ac_e][_Bd^f][c_eg][d^fa][_eg_b][^fac'][g_bd']", // dummy
                    seventhChord: ['Gm', 'Ao', 'Bb+', 'Cm', 'D', 'Eb', 'F#o', 'Gm'], // dummy
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
                    triadChord: ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm', 'Eo', 'F'],
                    seventh: "[FAce][GBdf][Aceg][Bdfa][cegb][dfac'][egbd'][fac'e']",
                    seventhChord: ['FΔ7', 'Gm7', 'Am7', 'BbΔ7', 'C7', 'Dm7', 'Eø7', 'FΔ7'],
                },
            },
            accidental: {
                scale: {
                    natural: 'FGA_Bcdef',
                    harmonic: 'FGA_Bcdef', // dummy
                },
                chord: {
                    triad: "[FAc][G_Bd][Ace][_Bdf][ceg][dfa][eg_b][fac']",
                    triadChord: ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm', 'Eo', 'F'],
                    seventh: "[FAce][G_Bdf][Aceg][_Bdfa][ceg_b][dfac'][eg_bd'][fac'e']",
                    seventhChord: ['FΔ7', 'Gm7', 'Am7', 'BbΔ7', 'C7', 'Dm7', 'Eø7', 'FΔ7'],
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
                    triadChord: ['Dm', 'Eo', 'F+', 'Gm', 'A', 'Bb', 'C#o', 'Dm'],
                    seventh: "[DFA][EGB][FA^c][GBd][A^ce][Bdf][^ceg][dfa]", // dummy
                    seventhChord: ['Dm', 'Eo', 'F+', 'Gm', 'A', 'Bb', 'C#o', 'Dm'], // dummy
                },
            },
            accidental: {
                scale: {
                    natural: 'DEFGA_Bcd',
                    harmonic: 'DEFGA_B^cd',
                },
                chord: {
                    triad: "[DFA][EG_B][FA^c][G_Bd][A^ce][_Bdf][^ceg][dfa]",
                    triadChord: ['Dm', 'Eo', 'F+', 'Gm', 'A', 'Bb', 'C#o', 'Dm'],
                    seventh: "[DFA][EG_B][FA^c][G_Bd][A^ce][_Bdf][^ceg][dfa]", // dummy
                    seventhChord: ['Dm', 'Eo', 'F+', 'Gm', 'A', 'Bb', 'C#o', 'Dm'], // dummy
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