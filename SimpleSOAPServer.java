import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.xml.ws.Endpoint;

@WebService
public class SimpleSOAPServer {

    @WebMethod
    public String sayHello(@WebParam(name = "name") String name) {
        return "Hello, " + name + "!";
    }

    @WebMethod
    public int add(@WebParam(name = "a") int a, @WebParam(name = "b") int b) {
        return a + b;
    }

    @WebMethod
    public int subtract(@WebParam(name = "a") int a, @WebParam(name = "b") int b) {
        return a - b;
    }

    @WebMethod
    public int multiply(@WebParam(name = "a") int a, @WebParam(name = "b") int b) {
        return a * b;
    }

    public static void main(String[] args) {
        String address = "http://localhost:8080/soap";
        Endpoint.publish(address, new SimpleSOAPServer());
        System.out.println("Server is running at " + address);
    }
}
