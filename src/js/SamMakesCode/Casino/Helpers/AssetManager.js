class AssetManager
{
    constructor(assetList)
    {
        this.assetList = assetList;
        this.loadedAssets = {};
    }

    getAsset(name)
    {
        return this.loadedAssets[name];
    }

    load(onEach, onComplete)
    {
        for (let i = 0; i < this.assetList.length; i++) {
            let asset = this.assetList[i];

            if (asset.constructor.name === 'ImageAsset') {
                let image = new Image;
                image.src = asset.src;

                let self = this;
                image.onload = () => {
                    asset.asset = image;
                    self.loadedAssets[asset.name] = asset;
                    let percentage = self.loadedPercent();
                    onEach(percentage);
                    if (percentage >= 100) {
                        onComplete();
                    }
                }
            }
        }
    }

    loadedPercent()
    {
        return Object.keys(this.loadedAssets).length / this.assetList.length * 100;
    }
}

export default AssetManager;
