const minorOption = document.getElementById('main__option--minor');
const mode = document.getElementById('mode');
const minorMode = document.getElementById('minorMode');
const scales = {
    C: 'CDEFGABc',
    D: 'DEFGABcd',
    E: 'EFGABcde',
    F: 'FGABcdef',
    G: 'GABcdefg',
    A: 'A,B,CDFFGA',
    B: 'B,CDEFGAB',
};

const triads = {
    C: "[CEG][DFA][EGB][FAc][GBd][Ace][Bdf][ceg]",
    D: "[DFA][EGB][FAc][GBd][Ace][Bdf][ceg][dfa]",
    E: "[EGB][FAc][GBd][Ace][Bdf][ceg][dfa][egb]",
    F: "[FAc][GBd][Ace][Bdf][ceg][dfa][egb][fac']",
    G: "[GBd][Ace][Bdf][ceg][dfa][egb][fac'][gbd']",
    A: "[A,CE][B,DF][CEG][DFA][EGB][FAc][GBd][Ace]",
    B: "[B,DF][CEG][DFA][EGB][FAc][GBd][Ace][Bdf]",
};

const keys = [
    {
        major: 'C',
        minor: 'Am',
    },
    {
        major: 'G',
        minor: 'Em',
    },
    {
        major: 'D',
        minor: 'Bm',
    },
    {
        major: 'A',
        minor: 'F#m',
    },
    {
        major: 'E',
        minor: 'C#m',
    },
    {
        major: 'B',
        minor: 'G#m',
    },
    {
        major: 'Gb/F#',
        minor: 'Ebm/D#m',
    },
    {
        major: 'Db',
        minor: 'Bbm',
    },
    {
        major: 'Ab',
        minor: 'Fm',
    },
    {
        major: 'Eb',
        minor: 'Cm',
    },
    {
        major: 'Bb',
        minor: 'Gm',
    },
    {
        major: 'F',
        minor: 'Dm',
    },
];

let currentKey = keys[0], currentTone = 'major';
function getAbcstr(){
    if(mode.value === 'scale'){
        scale = scales[currentKey[currentTone][0]];
        if(minorMode.value === 'natural')
            return `X:1\nL:1\nT:${ currentKey[currentTone].replace(/m/g, '') } ${ currentTone }\nK:${ currentKey[currentTone].split('/')[0] }\n${ scale }|`;
        else if (minorMode.value === 'harmonic')
            return `X:1\nL:1\nT:${ currentKey[currentTone].replace(/m/g, '') } ${ currentTone }\nK:${ currentKey[currentTone].split('/')[0] }\n${ [scale.slice(0, scale.length - 2), '^', scale.slice(scale.length - 2)].join('') }|`;
    }
    else if(mode.value === 'triads'){
        return `X:1\nL:1\nT:${ currentKey[currentTone].replace(/m/g, '') } ${ currentTone }\nK:${ currentKey[currentTone].split('/')[0] }\n${ triads[currentKey[currentTone][0]] }|`;
    }
}

function optionOnchange(){
    if(mode.value !== 'scale'){
        minorOption.style.display = 'none';
    }
    else {
        minorOption.style.display = 'inline-block';
    }
    renderBar(getAbcstr());
}

const stage = new Konva.Stage({
    container: 'main__canvas--circle',
    width: document.getElementById('main__canvas').clientWidth,
    height: document.getElementById('main__canvas').clientHeight,
});
const layer = new Konva.Layer();

const maxRadius = Math.min(stage.width(), stage.height()) / 2 - 20;
function renderBar(abcstr){
    ABCJS.renderAbc(
        'main__canvas--paper',
        abcstr,
        {
            scale: maxRadius * 0.005,
            staffwidth: maxRadius * 0.6 * 2,
            paddingtop: 0,
            paddingbottom: 0,
            paddingright: 0,
            paddingleft: 0,
        }
    );
}

renderBar(getAbcstr());

keys.forEach((key, idx) => {
    function onhover(node, tone){
        node.fill(highlight(node.fill(), -15));
        currentKey = key;
        currentTone = tone;
        renderBar(getAbcstr());
        layer.draw();
    }

    function onhoverend(node){
        node.fill(highlight(node.fill(), 15));
        layer.draw();
    }

    function highlight(hsl, val){
        const arg = hsl.match(/hsl\((.*), (.*), (.*)\)/);
        return `hsl(${ arg[1] }, ${ Number.parseInt(arg[2]) + val }%, ${ Number.parseInt(arg[3]) + val }%)`
    }

    let textRadius;
    const majorArc = new Konva.Arc({
        x: stage.width() / 2,
        y: stage.height() / 2,
        innerRadius: maxRadius * 0.85,
        outerRadius: maxRadius,
        rotation: -105 + idx * 30,
        angle: 360 / 12,
        fill: idx % 2 ? 'hsl(54, 100%, 70%)' : 'hsl(50, 96%, 55%)',
        stroke: '#332011',
        strokeWidth: 1,
    });
    majorArc.on('mouseover touchstart', () => { onhover(majorArc, 'major'); });
    majorArc.on('mouseout touchend', () => { onhoverend(majorArc); });
    layer.add(majorArc);

    const minorArc = new Konva.Arc({
        x: stage.width() / 2,
        y: stage.height() / 2,
        innerRadius: maxRadius * 0.7,
        outerRadius: maxRadius * 0.85,
        rotation: -105 + idx * 30,
        angle: 30,
        fill: idx % 2 ? 'hsl(38, 80%, 94%)' : 'hsl(39, 64%, 83%)',
        stroke: '#332011',
        strokeWidth: 1,
    });
    minorArc.on('mouseover touchstart', () => { onhover(minorArc, 'minor'); });
    minorArc.on('mouseout touchend', () => { onhoverend(minorArc); });
    layer.add(minorArc);

    textRadius = (majorArc.innerRadius() + majorArc.outerRadius()) / 2;
    const majorText = new Konva.Text({
        x: majorArc.x() + textRadius * Math.cos(Math.PI / 180 * (90 - idx * 30)),
        y: majorArc.y() - textRadius * Math.sin(Math.PI / 180 * (90 - idx * 30)),
        text: key.major,
        fontSize: maxRadius * 0.09,
        fontFamily: 'Calibri',
        fill: 'black',
        rotation: idx * 30,
    })
    majorText.offsetX(majorText.width() / 2);
    majorText.offsetY(majorText.fontSize() * 0.4);
    majorText.on('mouseover touchstart', () => { onhover(majorArc, 'major'); });
    majorText.on('mouseout touchend', () => { onhoverend(majorArc); });
    layer.add(majorText);

    textRadius = (minorArc.innerRadius() + minorArc.outerRadius()) / 2;
    const minorText = new Konva.Text({
        x: minorArc.x() + textRadius * Math.cos(Math.PI / 180 * (90 - idx * 30)),
        y: minorArc.y() - textRadius * Math.sin(Math.PI / 180 * (90 - idx * 30)),
        text: key.minor,
        fontSize: maxRadius * 0.09,
        fontFamily: 'Calibri',
        fill: 'black',
        rotation: idx * 30,
    })
    minorText.offsetX(minorText.width() / 2);
    minorText.offsetY(minorText.fontSize() * 0.4);
    minorText.on('mouseover touchstart', () => { onhover(minorArc, 'minor'); });
    minorText.on('mouseout touchend', () => { onhoverend(minorArc); });
    layer.add(minorText);
});

stage.add(layer);