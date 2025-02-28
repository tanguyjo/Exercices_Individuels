import java.io.InputStreamReader;
import java.net.URL;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

/**
 * hello world,
 * this is a javaDoc
 *
 */
public class Pokedex {
    public static void main(String[] args) {
        try {
            // URL pointing to the JSON file
            URL url = new URL("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json");

            // Create a JSONParser object
            JSONParser parser = new JSONParser();

            // Open a stream to the URL and parse the JSON
            InputStreamReader reader = new InputStreamReader(url.openStream());
            JSONObject json = (JSONObject) parser.parse(reader);
            reader.close();

            // Extract the "pokemon" array from the JSON object
            JSONArray pokemonArray = (JSONArray) json.get("pokemon");

            // Output the JSON array
            System.out.println("Pokemon Array:");
            System.out.println(pokemonArray.toJSONString(); // Prints the full array as JSON

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
