
To move the inputBox item and its functions to another .swift file so you can reuse the dropdown menu in multiple files, you can follow these steps:

    Create a new Swift file:
        Create a new Swift file, for example, StatePickerTextField.swift.

    Create a custom UITextField subclass:
        In the new file, create a custom UITextField subclass that includes the UIPickerView setup and delegate methods.

    Use the custom UITextField in your original file:
        Replace the inputBox with an instance of your custom UITextField subclass.

Here's how you can do it:
Step 1: Create StatePickerTextField.swift

```
import UIKit

class StatePickerTextField: UITextField, UIPickerViewDelegate, UIPickerViewDataSource {
    
    let states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
                  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
                  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
                  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
                  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", 
                  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
                  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
                  "Wisconsin", "Wyoming"]

    var statePicker: UIPickerView!
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        setupPicker()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setupPicker()
    }
    
    private func setupPicker() {
        statePicker = UIPickerView()
        statePicker.delegate = self
        statePicker.dataSource = self
        self.inputView = statePicker
    }
    
    // UIPickerViewDataSource methods
    func numberOfComponents(in pickerView: UIPickerView) -> Int {
        return 1
    }

    func pickerView(_ pickerView: UIPickerView, numberOfRowsInComponent component: Int) -> Int {
        return states.count
    }

    // UIPickerViewDelegate methods
    func pickerView(_ pickerView: UIPickerView, titleForRow row: Int, forComponent component: Int) -> String? {
        return states[row]
    }

    func pickerView(_ pickerView: UIPickerView, didSelectRow row: Int, inComponent component: Int) {
        self.text = states[row]
    }
}
```

Step 2: Use StatePickerTextField in PaymentMethodsVC

In your original file, use the StatePickerTextField instead of PaddedTextField for the state input:

```
import UIKit
import NVActivityIndicatorView

///** MAIN CLASS
class PaymentMethodsVC: KeyboardViewController {
    // code
}

///** EXTENSION
extension PaymentMethodsVC {
    ///** CREDIT CARD ENTRY FORM
    func layoutCreditCard() {

        ///** CC STATE INPUT
        let inputBox = StatePickerTextField(frame: CGRect(x: 11, y: innerHeight, width: buttonWidth - 22, height: 48))
        inputBox.borderStyle = .none
        inputBox.backgroundColor = .white
        inputBox.layer.cornerRadius = 10
        inputBox.returnKeyType = .next
        inputBox.textContentType = UITextContentType.addressState
        inputBox.delegate = self
        inputBox.tag = 5
        inputFields.append(inputBox)
        layer.addSubview(inputBox)
        inputFieldKeys.append("state")

        if vc != nil {
            inputBox.text = vc!.mainContact.state
        }
        if let saved = appDel.userInput["pay_state"] {
            inputBox.text = saved
        }
        innerHeight += inputBox.frame.height + 10
    }
}
```

Explanation:

    StatePickerTextField.swift: Defines a custom UITextField subclass that includes the UIPickerView setup and delegate methods.
    PaymentMethodsVC: Uses StatePickerTextField instead of PaddedTextField to create the state input field.

This structure allows you to reuse the StatePickerTextField in multiple files by simply creating an instance of it.








