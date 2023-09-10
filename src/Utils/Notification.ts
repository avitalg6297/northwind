import { Notyf } from "notyf";

class Notification {
    private notify = new Notyf({
        duration: 4000,
        position: { x: "center", y: "top" }
    });

    public success(message: string): void {
        this.notify.success(message);
    }

    public err(error: any): void {
        const message = this.extractMessage(error)
        this.notify.error(message);
    }

    private extractMessage(error: any): string {
        //if regular string
        if (typeof error === "string") return error;

        // if axios excption
        if (typeof error.response?.data === "string") return error.response.data;

        // if other exception
        if (typeof error.message === "string") return error.message
        //unknown
        return "Some error, please try again";
    }

}

const notification = new Notification();

export default notification;