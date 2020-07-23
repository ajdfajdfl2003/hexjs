Vue.component('shippingInfo', {
  template: `
    <div class="my-5 row justify-content-center">
        <validation-observer v-slot="{ invalid }" class="col-md-6">
            <form @submit.prevent="">
                <validation-provider rules="required" class="form-group" tag="div"
                                     v-slot="{ errors, classes }">
                    <label for="name">收件人姓名</label>
                    <input id="name" type="text" name="收件人姓名" class="form-control" :class="classes" v-model="shipper.name">
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                </validation-provider>
                <validation-provider rules="required|email" class="form-group" tag="div"
                                     v-slot="{ errors, classes }">
                    <label for="email">Email</label>
                    <input id="email" type="email" name="Email" class="form-control" :class="classes" v-model="shipper.email">
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                </validation-provider>
                <validation-provider rules="required|min:9" class="form-group" tag="div"
                                     v-slot="{ errors, classes }">
                    <label for="tel">電話</label>
                    <input id="tel" type="tel" name="電話" class="form-control" :class="classes" v-model="shipper.tel">
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                </validation-provider>
                <validation-provider rules="required" class="form-group" tag="div"
                                     v-slot="{ errors, classes }">
                    <label for="address">地址</label>
                    <input id="address" type="text" name="地址" class="form-control" :class="classes" v-model="shipper.address">
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                </validation-provider>
                <validation-provider rules="required" class="form-group" tag="div"
                                     v-slot="{ errors, classes }">
                    <label for="payment">付款方式</label>
                    <select id="payment" name="付款方式" class="form-control" :class="classes" v-model="shipper.payment">
                        <option value="" disabled selected>請選擇付款方式</option>
                        <option value="WebATM">WebATM</option>
                        <option value="ATM">ATM</option>
                        <option value="Barcode">Barcode</option>
                        <option value="Credit">Credit</option>
                        <option value="ApplePay">ApplePay</option>
                        <option value="GooglePay">GooglePay</option>
                    </select>
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                </validation-provider>
                <div class="form-group">
                    <label for="message">留言</label>
                    <textarea id="message" cols="30" rows="3" class="form-control"></textarea>
                </div>
                <div class="text-right">
                    <button type="submit" class="btn btn-info" :disabled="invalid">送出表單</button>
                </div>
            </form>
        </validation-observer>
    </div>  
  `,
  data () {
    return {
      shipper: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: '',
        comment: ''
      }
    }
  }
});