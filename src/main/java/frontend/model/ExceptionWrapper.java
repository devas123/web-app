package frontend.model;

/**
 * Created by ezabavno on 29.03.2017.
 */
public class ExceptionWrapper {

    private String message;

    private String name;


    /**
     * Instantiates a new opding exception.
     *
     * @param message the exception message
     */
    public ExceptionWrapper(String message) {
        this.message = message;
    }

    public ExceptionWrapper(String name, String desc) {
        this.message = desc;
        this.name = name;
    }
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
