const stage = new Konva.Stage({
    container: 'main__circle',
    width: window.innerWidth,
    height: window.innerHeight,
});

const layer = new Konva.Layer();

const keys = [
    {
        major: 'C',
        minor: 'Am',
        majorScale: 'CDEFGABc',
        minorScale: 'A,B,CDEFGA',
    },
    {
        major: 'G',
        minor: 'Em',
        majorScale: 'GABcdefg',
        minorScale: 'EFGABcde',
    },
    {
        major: 'D',
        minor: 'Bm',
        majorScale: 'DEFGABcd',
        minorScale: 'B,CDEFGAB',
    },
    {
        major: 'A',
        minor: 'F#m',
        majorScale: 'A,B,CDEFGA',
        minorScale: 'FGABcdef',
    },
    {
        major: 'E',
        minor: 'C#m',
        majorScale: 'EFGABcde',
        minorScale: 'CDEFGABc',
    },
    {
        major: 'B',
        minor: 'G#m',
        majorScale: 'B,CDEFGAB',
        minorScale: 'GABcdefg',
    },
    {
        major: 'Gb/F#',
        minor: 'Ebm/D#m/',
        majorScale: 'GABcdefg',
        minorScale: 'EFGABcde',
    },
    {
        major: 'Db',
        minor: 'Bbm',
        majorScale: 'DEFGABcd',
        minorScale: 'B,CDEFGAB',
    },
    {
        major: 'Ab',
        minor: 'Fm',
        majorScale: 'A,B,CDEFGA',
        minorScale: 'FGABcdef',
    },
    {
        major: 'Eb',
        minor: 'Cm',
        majorScale: 'EFGABcde',
        minorScale: 'CDEFGABc',
    },
    {
        major: 'Bb',
        minor: 'Gm',
        majorScale: 'B,CDEFGAB',
        minorScale: 'GABcdefg',
    },
    {
        major: 'F',
        minor: 'Dm',
        majorScale: 'FGABcdef',
        minorScale: 'DEFGABcd',
    },
];

const maxRadius = Math.min(stage.width(), stage.height()) / 2 - 20;
keys.forEach((key, idx) => {
    let textRadius;
    const majorArc = new Konva.Arc({
        x: stage.width() / 2,
        y: stage.height() / 2,
        innerRadius: maxRadius * 0.85,
        outerRadius: maxRadius,
        rotation: -105 + idx * 30,
        angle: 360 / 12,
        fill: idx % 2 ? 'rgb(255, 240, 105)' : 'rgb(250, 214, 29)',
        stroke: '#332011',
        strokeWidth: 1,
    });
    layer.add(majorArc);

    majorArc.on('mouseover touchstart', function() {
        majorArc.fill(idx % 2 ? 'rgb(215, 194, 0)' : 'rgb(191, 160, 4)');
        ABCJS.renderAbc(
            'main__paper',
            `X:1\nL:1/4\nK:${ key.major.split('/')[0] }\n|${ key.majorScale }|`,
            {
                scale: 2,
                staffwidth: maxRadius * 0.6 * 2,
                paddingtop: 0,
                paddingbottom: 0,
                paddingright: 0,
                paddingleft: 0,
            }
        );
        layer.draw();
    });

    majorArc.on('mouseout touchend', function() {
        majorArc.fill(idx % 2 ? 'rgb(255, 240, 105)' : 'rgb(250, 214, 29)');
        layer.draw();
    });

    const minorArc = new Konva.Arc({
        x: stage.width() / 2,
        y: stage.height() / 2,
        innerRadius: maxRadius * 0.7,
        outerRadius: maxRadius * 0.85,
        rotation: -105 + idx * 30,
        angle: 30,
        fill: idx % 2 ? 'rgb(252, 243, 228)' : 'rgb(239, 219, 182)',
        stroke: '#332011',
        strokeWidth: 1,
    });
    layer.add(minorArc);

    minorArc.on('mouseover touchstart', function() {
        minorArc.fill(idx % 2 ? 'rgb(237, 185, 98)' : 'rgb(216, 167, 78)');
        ABCJS.renderAbc(
            'main__paper',
            `X:1\nL:1/4\nK:${ key.minor.split('/')[0] }\n|${ key.minorScale }|`,
            {
                scale: 2,
                staffwidth: maxRadius * 0.6 * 2,
                paddingtop: 0,
                paddingbottom: 0,
                paddingright: 0,
                paddingleft: 0,
            }
        );
        layer.draw();
    });

    minorArc.on('mouseout touchend', function() {
        minorArc.fill(idx % 2 ? 'rgb(252, 243, 228)' : 'rgb(239, 219, 182)');
        layer.draw();
    });

    textRadius = (majorArc.innerRadius() + majorArc.outerRadius()) / 2;
    const majorText = new Konva.Text({
        x: majorArc.x() + textRadius * Math.cos(Math.PI / 180 * (90 - idx * 30)),
        y: majorArc.y() - textRadius * Math.sin(Math.PI / 180 * (90 - idx * 30)),
        text: key.major,
        fontSize: 30,
        fontFamily: 'Calibri',
        fill: 'black',
        rotation: idx * 30,
    })
    majorText.offsetX(majorText.width() / 2);
    majorText.offsetY(13);
    layer.add(majorText);

    textRadius = (minorArc.innerRadius() + minorArc.outerRadius()) / 2;
    const minorText = new Konva.Text({
        x: minorArc.x() + textRadius * Math.cos(Math.PI / 180 * (90 - idx * 30)),
        y: minorArc.y() - textRadius * Math.sin(Math.PI / 180 * (90 - idx * 30)),
        text: key.minor,
        fontSize: 30,
        fontFamily: 'Calibri',
        fill: 'black',
        rotation: idx * 30,
    })
    minorText.offsetX(minorText.width() / 2);
    minorText.offsetY(13);
    layer.add(minorText);
});

stage.add(layer);

ABCJS.renderAbc(
    'main__paper',
    `X:1\nL:1/4\nK:C\n|CDEFGABc|`,
    {
        scale: 2,
        staffwidth: maxRadius * 0.6 * 2,
        paddingtop: 0,
        paddingbottom: 0,
        paddingright: 0,
        paddingleft: 0,
    }
);
