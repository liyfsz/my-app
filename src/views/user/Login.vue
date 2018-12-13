<template>
  <div class="login">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <FormItem label="Name" prop="name">
        <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
      </FormItem>
      <FormItem label="E-mail" prop="mail">
        <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
      </FormItem>
      <FormItem label="City" prop="city">
        <Select v-model="formValidate.city" placeholder="Select your city">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
      </FormItem>
      <FormItem label="Date">
        <Row>
          <i-col span="11">
            <FormItem prop="date">
              <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
            </FormItem>
          </i-col>
          <i-col span="2" style="text-align: center">-</i-col>
          <i-col span="11">
            <FormItem prop="time">
              <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>
            </FormItem>
          </i-col>
        </Row>
      </FormItem>
      <FormItem label="Gender" prop="gender">
        <RadioGroup v-model="formValidate.gender">
          <Radio label="male">Male</Radio>
          <Radio label="female">Female</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="Hobby" prop="interest">
        <CheckboxGroup v-model="formValidate.interest">
          <Checkbox label="Eat"></Checkbox>
          <Checkbox label="Sleep"></Checkbox>
          <Checkbox label="Run"></Checkbox>
          <Checkbox label="Movie"></Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem label="Desc" prop="desc">
        <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
        <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  import {login} from '../../utils/const';
  export default {
    name: 'login',
    data () {
      return {
        formValidate: {
          name: '111',
          mail: '111@qq.com',
          city: 'shanghai',
          gender: 'female',
          interest: ['Run'],
          date: '2018-09-09',
          time: '09:09:00',
          desc: '我搜到达到啊实打实的'
        },
        ruleValidate: {
          name: [
            { required: true, message: 'The name cannot be empty', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
            { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
          ],
          city: [
            { required: true, message: 'Please select the city', trigger: 'change' }
          ],
          gender: [
            { required: true, message: 'Please select gender', trigger: 'change' }
          ],
          interest: [
            { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
            { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
          ],
          date: [
            { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
          ],
          time: [
            { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
          ],
          desc: [
            { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
            { type: 'string', min: 5, message: 'Introduce no less than 20 words', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
            login({
              name: this.formValidate.name,
              mail: this.formValidate.mail
            }, (response) => {
              console.log(response);
            })
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.login{
  width: 800px;
  margin: 0 auto;
}
</style>
