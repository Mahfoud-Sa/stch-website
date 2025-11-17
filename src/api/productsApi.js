import { createClient } from "contentful";

const client = createClient({
  space: "un3u2vlbxl9b",
  environment: "master",
  accessToken: "LDGIf-olDl-NofcWr4DGQ1B7kmzJ0AQWEygCTpg3nI4",
});

export async function getAllProductsFromContentful() {
  try {
    const response = await client.getEntries({
      content_type: "device",
    });

    // Convert Contentful items → your product structure
    return response.items.map((item) => {
      const fields = item.fields;

      // Resolve image asset
      let imageUrl = null;

      if (fields.image && fields.image.sys && response.includes?.Asset) {
        // find the asset object by ID
        const assetId = fields.image.sys.id;

        const asset = response.includes.Asset.find(
          (a) => a.sys.id === assetId
        );

        if (asset?.fields?.file?.url) {
          imageUrl = "https:" + asset.fields.file.url;
        }
      }

      return {
        id: item.sys.id,
        title: fields.deviceName ?? "No Name",
        description: fields.description ?? "No description available",
        price: fields.price ?? 0,
        image: imageUrl,
      };
    });
  } catch (err) {
    console.error("Error fetching products from Contentful:", err);
    throw err;
  }
}
