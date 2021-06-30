import java.util.*;

public class Main {

    public static void main(String...args) {
        Human human = new Human();
        human.setName("Cole");
        System.out.println(human.getName());
        
        HashMap<String, String> human_ = new HashMap<>();
        human_.put("name", "Cole");
        human_.put("complexion", "caramel");
    }
}
