import java.util.Scanner;
public class PanagramChecker {

	public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine().toUpperCase();

        boolean isPangram = checkPangram(input);

        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }


	}
	 public static boolean checkPangram(String sentence) {
	        boolean[] alphabetFlags = new boolean[26]; 

	        
	        for (int i = 0; i < sentence.length(); i++) {
	            char ch = sentence.charAt(i);
	            if (Character.isLetter(ch)) {
	                int index = ch - 'A';
	                alphabetFlags[index] = true;
	            }
	        }

	       
	        for (boolean flag : alphabetFlags) {
	            if (!flag) {
	                return false; 
	            }
	        }

	        return true; 
	    }

}
