const coffeeData = {
    roaster: 'My Coffee Roastery',
    // about the roaster -- where they're based, ethos, etc. 
    roasterNotes: 'this is a roastery with a past, present, future.',
    name: 'My Fun Coffee',
    tastingNotes: 'Apricot, Sweet Cherry',
    process: 'Washed',
    region: 'Colombia',
    coffeeNotes: 'This coffee was grown at high altitude which does some stuff to it, and makes it taste a certain way.',
}

const Coffee = () => {
    return (
        <div className="flex flex-col">
            <h2 className="text-3xl font-light border-b border-black">Today&apos;s Coffee</h2>
            
            <h3 className="mt-4 text-2xl">{coffeeData.name}</h3>
            <div className="flex flex-row">
                <h3>by {coffeeData.roaster}</h3>
                <p className="ml-2">{'>'}</p>
            </div>

            <p className="mt-6">
                {coffeeData.coffeeNotes}
            </p>
        </div>
    )
}

export default Coffee;